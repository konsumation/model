import { Base } from "./base.mjs";
import { Note } from "./note.mjs";
import { Category } from "./category.mjs";
import {
  name,
  serial,
  validFrom,
  description,
  unit,
  fractionalDigits
} from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 *
 */
export class Meter extends Base {
  /** @type {string} */ name;
  /** @type {string} */ description;
  /** @type {string} */ serial;
  /** @type {Date} */ validFrom;
  /** @type {Category} */ category;
  /** @type {number} */ #fractionalDigits;
  /** @type {string} */ #unit;

  static get factories() {
    return {
      [Note.typeName]: Note
    };
  }

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get typeName() {
    return "meter";
  }

  static get parentTypeName() {
    return "category";
  }

  static get attributes() {
    return {
      name,
      description,
      serial,
      unit,
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

  toString() {
    return this.name;
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
   * Delete a value
   * @param {*} context
   * @param {Date} time
   */
  async deleteValue(context, time) {}

  /**
   * List assigned Notes.
   * @return {AsyncIterable<Note>}
   */
  async *notes(context) {}

  /**
   * Add a note to the meter;
   * @param {*} context
   * @param {Object} values
   * @return {Promise<Note>}
   */
   addNote(context, values = {}) {
    values.meter = this;
    // @ts-ignore
    return new this.constructor.factories.note(values);
  }

  async *text(context) {
    yield* toText(context, this, "name", this.notes(context));
  }
}
