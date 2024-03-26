import { Note } from "./note.mjs";
import { unit, serial, name, validFrom, fractionalDigits, description } from "./attributes.mjs";
import { toText } from "./util.mjs";

export class Meter {
  /** @type {string} */ description;
  /** @type {string} */ unit;
  /** @type {string} */ serial;
  /** @type {number} */ fractionalDigits;
  /** @type {Date} */   validFrom;


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
      serial,
      description,
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

  
  async write(context) {}

  async delete(context) {}

  /**
   * @return {AsyncIterable<{time:Date,value:number}>}
   */
  async *values(context) {}

  /**
   * @return {AsyncIterable<Note>}
   */
  async *notes(context) {}

  async *text(context) {
    yield* toText(context, this, "serial", this.notes(context));
  }
}
