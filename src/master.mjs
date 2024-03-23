import { Category } from "./category.mjs";
export { Meter } from "./meter.mjs";
export { Note } from "./note.mjs";
export { Category };

/**
 * @property {string} schemaVersion
 */
export class Master {

  schemaVersion;
  
  /**
   *
   * @param {Object|string} config
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
}
