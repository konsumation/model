/**
 *
 */
export class Note {
  time;
  /** @type {string} */ description;

  async delete(master) {}

  async *text() {
    yield `[note "${this.time}"]`;
    yield `description=${this.description}`;
  }
}
