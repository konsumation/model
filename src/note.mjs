import { description } from "./attributes.mjs";

/**
 *
 */
export class Note {
  time;
  /** @type {string} */ description;

  get attributes() {
    return {
      description
    };
  }

  get attributeNames() {
    return Object.keys(this.attributes);
  }

  async delete(master) {}

  async *text() {
    yield `[note "${this.time}"]`;
    for (const a of this.attributeNames) {
      if (this[a] !== undefined) yield `${a}=${this[a]}`;
    }
  }
}
