import { Category } from "./category.mjs";
export { Meter } from "./meter.mjs";
export { Note } from "./note.mjs";
export { Category };

/**
 * @property {string} schemaVersion
 */
export class Master {
  /** @type {string} */schemaVersion;

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
