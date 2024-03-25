import { Note } from "./note.mjs";

export class Meter {
  /** @type {string} */ name;
  /** @type {string} */ unit;
  /** @type {number} */ fractionalDigits;

  get attributeNames() {
    return ["unit", "fractionalDigits"];
  }

  constructor(name) {
    this.name = name;
  }

  async delete(master) {}

  /**
   * @return {AsyncIterable<{time:Date,value:number}>}
   */
  async *values() {}

  /**
   * @return {AsyncIterable<Note>}
   */
  async *notes() {}

  async *text() {
    yield `[meter "${this.name}"]`;

    for (const a of this.attributeNames) {
      if (this[a] !== undefined) yield `${a}=${this[a]}`;
    }

    for await (const note of this.notes()) {
      yield* note.text();
    }
  }
}
