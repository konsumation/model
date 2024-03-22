import { Category } from "./category.mjs";
export { Meter } from "./meter.mjs";
export { Note } from "./note.mjs";
export { Category };
/**
 * 
 */
export class Master {
  /**
   *
   * @param {Object|string} config
   */
  async initialize(config) {
    return this;
  }

  /**
   */
  async close() {}

  /**
   * @return {AsyncIterable<Category>}
   */
  async *categories() {}
}
