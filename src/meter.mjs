import { Base } from "./base.mjs";
import { Note } from "./note.mjs";
import {
  unit,
  serial,
  validFrom,
  fractionalDigits,
  description
} from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 * 
 */
export class Meter extends Base {
  /** @type {string} */ description;
  /** @type {string} */ unit;
  /** @type {string} */ serial;
  /** @type {number} */ fractionalDigits = 2;
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
      serial,
      description,
      validFrom,
      fractionalDigits
    };
  }

  constructor(values) {
    super();
    this.attributeValues = values;
  }

  async write(context) {}

  async delete(context) {}

  /**
   * @return {AsyncIterable<{time:Date,value:number}>}
   */
  async *values(context) {}

  async addValue(context, time, value) {}

  /**
   * @return {AsyncIterable<Note>}
   */
  async *notes(context) {}

  async *text(context) {
    yield* toText(context, this, "serial", this.notes(context));
  }
}
