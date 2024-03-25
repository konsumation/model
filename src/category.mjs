import { Meter } from "./meter.mjs";

/**
 *
 */
export class Category {
  /** @type {string} */ name;
  /** @type {string} */ description;

  constructor(name) {
    this.name = name;
  }

  async delete(master) {}

  /**
   * @return {AsyncIterable<Meter>}
   */
  async *meters() {}

  async *text() {
    yield `[category "${this.name}"]`;

    for await (const meter of this.meters()) {
      yield* meter.text();
    }
  }
}
