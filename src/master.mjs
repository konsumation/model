export { Category } from "./category.mjs";
export { Meter } from "./meter.mjs";
export { Note } from "./note.mjs";

export class Master {
  /**
   *
   * @param {Object|string} config
   */
  async initialize(config) {}

  /**
   * @return {AsyncIterable<Category>}
   */
  async *categories() {}
}
