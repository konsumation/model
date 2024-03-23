import { Note } from "./note.mjs";

export class Meter {
  /** @type {string} */name;

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

    for await (const note of this.notes()) {
      yield* note.text();
    }
  }
}
