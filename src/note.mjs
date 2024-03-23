/**
 *
 */
export class Note {
  time;
  /** @type {string} */ description;

  async *text() {
    yield `[note "${this.time}"]`;
    yield this.description;
  }
}
