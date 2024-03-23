import { Meter } from "./meter.mjs";

/**
 *
 */
export class Category {
  /** @type {string} */ name;

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
