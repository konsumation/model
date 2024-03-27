import { Category } from "./category.mjs";
import {
  SCHEMA_VERSION_CURRENT,
  SCHEMA_VERSION_1,
  SCHEMA_VERSION_2
} from "./consts.mjs";
export { Meter } from "./meter.mjs";
export { Note } from "./note.mjs";
import { toText } from "./util.mjs";
import { description, schemaVersion } from "./attributes.mjs";
export * from "./attributes.mjs";
export { Category, SCHEMA_VERSION_CURRENT, SCHEMA_VERSION_1, SCHEMA_VERSION_2 };

/**
 * @property {string} schemaVersion
 */
export class Master {
  /** @type {string} */ schemaVersion = SCHEMA_VERSION_CURRENT;

  static get attributes() {
    return {
      description,
      schemaVersion
    };
  }

  static get attributeNames() {
    return Object.keys(this.attributes);
  }

  /**
   *
   * @param {Object|string} config
   * @return {Promise<Master>}
   */
  static async initialize(config) {
    return new this(config);
  }

  /**
   */
  async close() {}

  get attributeNames() {
    return this.constructor.attributeNames;
  }

  get attributeValues() {
    return Object.fromEntries(
      this.attributeNames
        .filter(a => this[a] !== undefined)
        .map(a => [a, this[a]])
    );
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
    let buffer = "";
    let numberOfValues = 0;
    let type, identifier;
    let values = {};
    let object;

    const insertObject = async () => {
      if (factories[type]) {
        object = new factories[type](values);
        type = undefined;
        values = {};
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
          } else {
            m = line.match(/^([\d\.]+)\s+([\d\.]+)/);
            if (m) {
              await insertObject();
              object.writeValue(
                this.context,
                parseFloat(m[2]),
                parseFloat(m[1])
              );
              numberOfValues += 1;
            }
          }
        }
      }
    }
  }
}
