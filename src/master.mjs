import { Base } from "./base.mjs";
import { Category } from "./category.mjs";
import { Meter } from "./meter.mjs";
import { Note } from "./note.mjs";
import { SCHEMA_VERSION_CURRENT, SCHEMA_VERSION_2, SCHEMA_VERSION_3 } from "./consts.mjs";
import { toText } from "./util.mjs";
import { description, schemaVersion } from "./attributes.mjs";
export * from "./attributes.mjs";
export * from "./consts.mjs";
export { Category, Meter, Note, Base };

/**
 * @property {string} schemaVersion
 */
export class Master extends Base {
  static get attributes() {
    return {
      description,
      schemaVersion
    };
  }

  /**
   *
   * @param {Object|string} values
   * @return {Promise<Master>}
   */
  static async initialize(values) {
    return new this(values);
  }

  static get supportedSchemaVersions()
  {
    return new Set([SCHEMA_VERSION_2, SCHEMA_VERSION_3]);
  }

  constructor(values) {
    super();
    this.attributeValues = values;
  }

  set schemaVersion(value) {}

  get schemaVersion() {
    return SCHEMA_VERSION_CURRENT;
  }

  /**
   */
  async close() {}

  /**
   * Add a category.
   * @param {Object} values 
   * @returns {Promise<Category>}
   */
  async addCategory(values) {
    return new Category(values);
  }

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

    const context = this.context;

    let buffer = "";
    let type, name;
    let values = {};
    let object;
    let last = {};

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
        return object.write(context);
      }
    };

    for await (const chunk of input) {
      buffer += chunk;
      for (const line of buffer.split(/\n/)) {
        let m = line.match(
          /^(([\d\.]{10,})|(\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d))\s+([\d\.]+)/
        );
        if (m) {
          await insertObject();
          // @ts-ignore
          object.writeValue(
            // @ts-ignore
            context,
            m[2] ?  new Date(parseFloat(m[2])) : new Date(m[3]),
            parseFloat(m[4])
          );

          statistics.value++;
        } else {
          m = line.match(/^(\w+)\s*=\s*(.*)/);
          if (m) {
            values[m[1]] = m[2];
          } else {
            m = line.match(/^\[(\w+)\s+"([^"]+)"\]/);
            if (m) {
              await insertObject();
              type = m[1];
              name = m[2];
              values = { name };
            }
          }
        }
      }
    }

    await insertObject();

    return statistics;
  }
}
