import { Note } from "./note.mjs";
import { unit, name, validFrom, fractionalDigits } from "./attributes.mjs";

export class Meter {
  /** @type {string} */ name;
  /** @type {string} */ unit;
  /** @type {number} */ fractionalDigits;
  /** @type {Date} */ validFrom;

  get attributes() {
    return {
      unit,
 //     name,
      validFrom,
      fractionalDigits
    };
  }

  get attributeNames() {
    return Object.keys(this.attributes);
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
      let value = this[a];
      if (value !== undefined) {
        if (value instanceof Date) {
          value = value.toISOString();
        }
        yield `${a}=${value}`;
      }
    }

    for await (const note of this.notes()) {
      yield* note.text();
    }
  }
}
