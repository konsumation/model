import { Base } from "./base.mjs";
import { Category } from "./category.mjs";
import { Meter } from "./meter.mjs";
import { Note } from "./note.mjs";
import { SCHEMA_VERSION_CURRENT } from "./consts.mjs";
import { toText } from "./util.mjs";
import { description, schemaVersion } from "./attributes.mjs";
export * from "./attributes.mjs";
export * from "./consts.mjs";
export { Category, Meter, Note };

/**
 * @property {string} schemaVersion
 */
export class Master extends Base {
  /** @type {string} */ schemaVersion = SCHEMA_VERSION_CURRENT;

  static get attributes() {
    return {
      description,
      schemaVersion
    };
  }

  /**
   *
   * @param {Object|string} config
   * @return {Promise<Master>}
   */
  static async initialize(config) {
    return new this(config);
  }

  constructor(values) {
    super();
  }

  /**
   */
  async close() {}

  /**
   * @return {AsyncIterable<Category>}
   */
  async *categories(context) {}

  /**
   * Create text representation
   * @return {AsyncIterable<string>}
   */
  async *text(context) {
    yield* toText(context, this, undefined, this.categories(context));
  }

  async fromText(input, factories) {
    const typeLookup = Object.fromEntries(factories.map(f => [f.typeName, f]));
    const statistics = Object.fromEntries(factories.map(f => [f.typeName, 0]));
    statistics.value = 0;

    let buffer = "";
    let type, name;
    let values = {};
    let object;
    let last = {};
    let parentType;

    const insertObject = async () => {
      if (typeLookup[type]) {
        statistics[type]++;

        const parentTypeName = typeLookup[type].parentTypeName;

        if (last[parentTypeName]) {
          values[parentTypeName] = last[parentTypeName];
        }

        object = new typeLookup[type](values);
        last[type] = object;

        type = undefined;
        // @ts-ignore
        values = undefined;
        // @ts-ignore
        return object.write(this.context);
      }
    };

    for await (const chunk of input) {
      buffer += chunk;
      for (const line of buffer.split(/\n/)) {
        let m = line.match(/^(\w+)\s*=\s*(.*)/);
        if (m) {
          values[m[1]] = m[2];
        } else {
          m = line.match(/^\[(\w+)\s+"([^"]+)"\]/);
          if (m) {
            await insertObject();
            type = m[1];
            name = m[2];
            values = { name };
          } else {
            m = line.match(/^([\d\.]+)\s+([\d\.]+)/);
            if (m) {
              await insertObject();
              // @ts-ignore
              object.writeValue(
                // @ts-ignore
                this.context,
                new Date(parseFloat(m[2])),
                parseFloat(m[1])
              );
              statistics.value++;
            } else {
              m = line.match(/^(\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d)\s+([\d\.]+)/);
              if (m) {
                await insertObject();
                // @ts-ignore
                object.writeValue(
                  // @ts-ignore
                  this.context,
                  new Date(m[2]),
                  parseFloat(m[1])
                );
                statistics.value++;
              }
            }
          }
        }
      }
    }

    return statistics;
  }
}
