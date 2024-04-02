import { Base } from "./base.mjs";
import { Category } from "./category.mjs";
import { Meter } from "./meter.mjs";
import { Note } from "./note.mjs";
import {
  SCHEMA_VERSION_CURRENT,
  SCHEMA_VERSION_2,
  SCHEMA_VERSION_3
} from "./consts.mjs";
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

  static get factories() {
    return {
      [Category.typeName]: Category
    };
  }

  static get supportedSchemaVersions() {
    return new Set([SCHEMA_VERSION_2, SCHEMA_VERSION_3]);
  }

  /**
   *
   * @param {Object|string} values
   * @return {Promise<Master>}
   */
  static async initialize(values) {
    return new this(values);
  }

  context;

  constructor(values) {
    super();
    this.attributeValues = values;
  }

  set schemaVersion(value) {
    // @ts-ignore
    if (!this.constructor.supportedSchemaVersions.has(value)) {
      throw new Error(
        `Unsupported schema version ${value} only supporting ${[
          // @ts-ignore
          ...this.constructor.supportedSchemaVersions
        ]}`
      );
    }
  }

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
  addCategory(values) {
    // @ts-ignore
    return new this.constructor.factories.category(values);
  }

  /**
   * @return {AsyncIterable<Category>}
   */
  async *categories() {}

  /**
   * Create text representation
   * @return {AsyncIterable<string>}
   */
  async *text() {
    yield* toText(this.context, this, undefined, this.categories());
  }

  async fromText(input) {
    // @ts-ignore
    const typeLookup = this.constructor.factories;
    Object.assign(
      typeLookup,
      typeLookup.category.factories,
      typeLookup.category.factories.meter.factories
    );

    const statistics = Object.fromEntries(
      Object.keys(typeLookup).map(typeName => [typeName, 0])
    );
    statistics.value = 0;

    // @ts-ignore
    const context = this.context;

    let buffer = "";
    let type, name;
    let values = {};
    let object;
    let last = {};

    const insertObject = async () => {
      if (type === undefined) {
        this.attributeValues = values;

        // @ts-ignore
        values = undefined;
        return;
      }
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
            m[2] ? new Date(parseFloat(m[2])) : new Date(m[3]),
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
