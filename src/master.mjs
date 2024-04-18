import { Base } from "./base.mjs";
import { Category } from "./category.mjs";
import { Meter } from "./meter.mjs";
import { Note } from "./note.mjs";
import { Value } from "./value.mjs";
import {
  SCHEMA_VERSION_CURRENT,
  SCHEMA_VERSION_2,
  SCHEMA_VERSION_3
} from "./consts.mjs";
import { toText } from "./util.mjs";
import { description, schemaVersion } from "./attributes.mjs";
export * from "./attributes.mjs";
export * from "./consts.mjs";
export { Category, Meter, Note, Value, Base };

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
      [Category.type]: Category
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
    this.setAttributes(values);
  }

  get factories() {
    // @ts-ignore
    const factories = this.constructor.factories;
    const categoryFactories = factories.category.factories;
    return Object.assign(
      factories,
      categoryFactories,
      categoryFactories.meter.factories,
      { master: this.constructor }
    );
  }

  async one(query) {
    const context = this.context;

    if (query.category) {
      const category = await this.category(context, query.category);

      if (category) {
        if (query.meter) {
          const meter = await category.meter(context, query.meter);

          if (meter) {
            if (query.note) {
              return meter.note(context, query.note);
            }

            if (query.value) {
              return meter.value(context, query.value instanceof Date ? query.value : new Date(query.value));
            }
          }

          return meter;
        }
      }

      return category;
    }
  }

  async *all(query) {
    const context = this.context;

    if (query.category === '*') {
      yield* this.categories(context);
    }

    else if (query.category) {
      const category = await this.category(context, query.category);

      if (category) {
        if (query.meter === "*") {
          yield* category.meters(context);
        }

        if (query.value === "*") {
          yield* category.values(context);
        }

        if (query.meter) {
          const meter = await category.meter(context, query.meter);
          if (meter) {
            if (query.note === "*") {
              yield* meter.notes(context);
            } else {
              yield* meter.values(context);
            }
          }
        }
      }
      return;
    }
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
   * Write attributes store.
   * @param {any} context
   */
  async write(context) {}

  /**
   */
  async close() {}

  /**
   * Add a category.
   * @param {any} context
   * @param {Object} attributes
   * @param {string} attributes.name
   * @param {string} [attributes.description]
   * @param {number} [attributes.fractionalDigits]
   * @param {string} [attributes.unit]
   * @returns {Category}
   */
  addCategory(context, attributes) {
    // @ts-ignore
    return new this.constructor.factories.category(attributes);
  }

  /**
   * @param {any} context
   * @return {AsyncIterable<Category>}
   */
  async *categories(context) {}

  /**
   *
   * @param {any} context
   * @param {string} name
   * @returns {Promise<Category|undefined>}
   */
  async category(context, name) {
    for await (const category of this.categories(context)) {
      if (category.name === name) {
        return category;
      }
    }
  }

  /**
   * Create text representation
   * @return {AsyncIterable<string>}
   */
  async *text(context = this.context) {
    yield* toText(context, this, undefined, this.categories(context));
  }

  async fromText(input) {
    const typeLookup = this.factories;

    const statistics = Object.fromEntries(
      Object.keys(typeLookup).map(type => [type, 0])
    );

    // @ts-ignore
    const context = this.context;

    let buffer = "";
    let type = "master";
    let name;
    let values = {};
    let object = this;
    let last = {};

    const insertObject = async () => {
      if (typeLookup[type]) {
        statistics[type]++;

        if (type === "master") {
          object.setAttributes(values);
        } else {
          const parenttype = typeLookup[type].parenttype;

          if (last[parenttype]) {
            values[parenttype] = last[parenttype];
          }

          object = new typeLookup[type](values);
        }

        last[type] = object;

        type = undefined;
        values = {};

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
          if (object instanceof Category /*&& !object.activeMeter(context)*/) {
            object = new typeLookup.meter({
              category: object,
              name: "autogenerated default Meter",
              validFrom: new Date()
            });
            await object.write(context);
          }
          // @ts-ignore
          const value = object.addValue(context, {
            date: m[2] ? new Date(parseFloat(m[2]) * 1000) : new Date(m[3]),
            value: parseFloat(m[4])
          });
          await value.write(context);
          statistics.value++;
        } else {
          m = line.match(/^(\w+)\s*=\s*(.*)/);
          if (m) {
            const key = m[1];
            const attribute = typeLookup[type].attributes[key];
            switch (attribute.type) {
              case "timestamp":
                values[key] = new Date(m[2]);
                break;
              case "number":
                values[key] = parseFloat(m[2]);
                break;
              default:
                values[key] = m[2];
            }
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
