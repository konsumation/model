import { Base } from "./base.mjs";
import { Note } from "./note.mjs";
import { Category } from "./category.mjs";
import {
  serial,
  validFrom,
  description,
  unit,
  fractionalDigits,
} from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 *
 */
export class Meter extends Base {
  /** @type {string} */ description;
  /** @type {string} */ serial;
  /** @type {Date} */ validFrom;
  /** @type {Category} */ category;
  /** @type {number} */ #fractionalDigits = 2;
  /** @type {string} */ #unit;

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
      fractionalDigits,
      category: Category
    };
  }

  constructor(values) {
    super();
    this.attributeValues = values;
  }

  get fractionalDigits() {
    return this.#fractionalDigits || this.category?.fractionalDigits;
  }

  set fractionalDigits(value) {
    this.#fractionalDigits = value;
  }

  get unit() {
    return this.#unit || this.category?.unit;
  }

  set unit(value) {
    this.#unit = value;
  }

  get name() {
    return this.serial;
  }
  
  toString() {
    return this.serial;
  }

  async write(context) {}

  async delete(context) {}

  /**
   * @return {AsyncIterable<{time:Date,value:number}>}
   */
  async *values(context) {}

  /**
   * Write new value
   * @param {*} context
   * @param {Date} time
   * @param {number} value
   */
  async writeValue(context, time, value) {}

  /**
   * List assigned Notes.
   * @return {AsyncIterable<Note>}
   */
  async *notes(context) {}

  async *text(context) {
    yield* toText(context, this, "serial", this.notes(context));
  }
}
