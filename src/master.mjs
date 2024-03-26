import { Category } from "./category.mjs";
import {
  SCHEMA_VERSION_CURRENT,
  SCHEMA_VERSION_1,
  SCHEMA_VERSION_2
} from "./consts.mjs";
export { Meter } from "./meter.mjs";
export { Note } from "./note.mjs";
export { Category, SCHEMA_VERSION_CURRENT, SCHEMA_VERSION_1, SCHEMA_VERSION_2 };

/**
 * @property {string} schemaVersion
 */
export class Master {
  /** @type {string} */ schemaVersion = SCHEMA_VERSION_CURRENT;

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

  /**
   * @return {AsyncIterable<Category>}
   */
  async *categories() {}

  /**
   * Create text representation
   * @return {AsyncIterable<string>}
   */
  async *text() {
    yield `schemaVersion=${this.schemaVersion}`;

    for await (const category of this.categories()) {
      yield* category.text();
    }
  }
}
