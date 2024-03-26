import { Note } from "./note.mjs";
import { unit, name, validFrom, fractionalDigits } from "./attributes.mjs";
import { toText } from "./util.mjs";

export class Meter {
  /** @type {string} */ name;
  /** @type {string} */ unit;
  /** @type {number} */ fractionalDigits;
  /** @type {Date} */ validFrom;

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get typeName() {
    return "meter";
  }

  static get attributes() {
    return {
      unit,
      name,
      validFrom,
      fractionalDigits
    };
  }

  get attributeNames() {
    return Object.keys(this.constructor.attributes);
  }

  constructor(values) {
    for (const a of this.attributeNames) {
      this[a] = values[a];
    }
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
    yield* toText(this, "name", this.notes());
  }
}
