import { Base } from "./base.mjs";
import { Category } from "./category.mjs";
import {
  SCHEMA_VERSION_CURRENT,
  SCHEMA_VERSION_1,
  SCHEMA_VERSION_2,
  SCHEMA_VERSION_3
} from "./consts.mjs";
export { Meter } from "./meter.mjs";
export { Note } from "./note.mjs";
import { toText } from "./util.mjs";
import { description, schemaVersion } from "./attributes.mjs";
export * from "./attributes.mjs";
export { Category, SCHEMA_VERSION_CURRENT, SCHEMA_VERSION_1, SCHEMA_VERSION_2, SCHEMA_VERSION_3 };

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

    let buffer = "";
    let type, identifier;
    let values = {};
    let object;

    const insertObject = async () => {
      if (typeLookup[type]) {
        statistics[type] = statistics[type] + 1;
        object = new typeLookup[type](values);
        type = undefined;
        values = {};
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
            identifier = m[2];
            values.name = identifier; // TODO key attribute
          } else {
            m = line.match(/^([\d\.]+)\s+([\d\.]+)/);
            if (m) {
              await insertObject();
              // @ts-ignore
              object.writeValue(
                // @ts-ignore
                this.context,
                parseFloat(m[2]),
                parseFloat(m[1])
              );
            }
          }
        }
      }
    }

    return statistics;
  }
}
