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
  /** @type {Category} */ category;
  /** @type {string?} */ description;
  /** @type {string?} */ serial;
  /** @type {Date?} */ validFrom;
  /** @type {number?} */ #fractionalDigits;
  /** @type {string?} */ #unit;

  static get factories() {
    return {
      [Note.type]: Note
    };
  }

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get type() {
    return "meter";
  }

  static get parenttype() {
    return "category";
  }

  static get attributes() {
    return {
      name,
      category: Category,
      description,
      serial,
      unit,
      validFrom,
      fractionalDigits
    };
  }

  /**
   * Create a new Meter.
   * @param {Object} values
   * @param {string} values.name
   * @param {string} values.category
   * @param {string} [values.description]
   * @param {string} [values.serial]
   * @param {Date} [values.validFrom]
   * @param {number} [values.fractionalDigits]
   * @param {string} [values.unit]
   */
  constructor(values) {
    super();
    this.setAttributes(values);
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

  /**
   * @param {any} context
   */
  async write(context) {}

  /**
   * @param {any} context
   */
  async delete(context) {}

  /**
   * @param {any} context
   * @return {AsyncIterable<{date:Date,value:number}>}
   */
  async *values(context) {}

  /**
   * Write new value.
   * @param {any} context
   * @param {Date} time
   * @param {number} value
   */
  async writeValue(context, time, value) {}

  /**
   * Delete a value.
   * @param {any} context
   * @param {Date} time
   */
  async deleteValue(context, time) {}

  /**
   * List assigned Notes.
   * @param {any} context
   * @param {Object} [options]
   * @return {AsyncIterable<Note>}
   */
  async *notes(context, options) {}

  /**
   * Add a note to the meter;
   * @param {any} context
   * @param {Object} values
   * @return {Promise<Note>}
   */
  addNote(context, values = {}) {
    values.meter = this;
    // @ts-ignore
    return new this.constructor.factories.note(values);
  }

  /**
   * Text representation.
   * @param {any} context
   * @returns {AsyncIterable<string>}
   */
  async *text(context) {
    yield* toText(context, this, "name", this.notes(context));
  }
}
