import { Base } from "./base.mjs";
import { Note } from "./note.mjs";
import { Value } from "./value.mjs";
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
  /** @type {Date?} */ validFrom = validFrom.default;
  /** @type {number?} */ #fractionalDigits;
  /** @type {string?} */ #unit;

  static get factories() {
    return {
      [Note.type]: Note,
      [Value.type]: Value
    };
  }

  /**
   * Name of the type in text dump.
   * @return {string}
   */
  static get type() {
    return "meter";
  }

  /**
   * Name of the parents type.
   * @return {string}
   */
  static get parentType() {
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
   * @param {Object} attributes
   * @param {string} attributes.name
   * @param {Category} attributes.category
   * @param {Date} attributes.validFrom
   * @param {string} [attributes.description]
   * @param {string} [attributes.serial]
   * @param {number} [attributes.fractionalDigits]
   * @param {string} [attributes.unit]
   */
  constructor(attributes) {
    super();
    this.setAttributes(attributes);
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
   * @return {AsyncIterable<Value>}
   */
  async *values(context) {}

  /**
   * Deliver Value for a given date.
   * @param {any} context
   * @param {Date} date
   * @returns {Promise<Value|undefined>}
   */
  async value(context, date) {
    for await (const value of this.values(context)) {
      if (value.date.getTime() === date.getTime()) {
        return value;
      }
    }
  }

  /**
   * add new value.
   * @param {any} context
   * @param {Object} attributes
   * @param {Date} attributes.date
   * @param {number} attributes.value
   * @returns {Promise<Value>}
   */
  addValue(context, attributes) {
    //@ts-ignore
    attributes.meter = this;
    // @ts-ignore
    return new this.constructor.factories.value(attributes);
  }

  /**
   * delete value.
   * @param {any} context
   * @param {Date} date
   * @returns {Promise<void>}
   */
  deleteValue(context, date) {
    // @ts-ignore
    const value = new this.constructor.factories.value({ meter: this, date });
    return value.delete(context);
  }

  /**
   * Get the latest value.
   * @param {any} context
   * @return {Promise<Value|undefined>}
   */
  async latestValue(context) {
    let latest;

    for await (const value of this.values(context)) {
      if (!latest || value.date.getTime() > latest.date.getTime()) {
        latest = value;
      }
    }

    return latest;
  }

  /**
   * List assigned Notes.
   * @param {any} context
   * @param {Object} [options]
   * @return {AsyncIterable<Note>}
   */
  async *notes(context, options) {}

  /**
   * Deliver Note for a given name.
   * @param {any} context
   * @param {string} name
   * @returns {Promise<Note|undefined>}
   */
  async note(context, name) {
    for await (const note of this.notes(context)) {
      if (note.name === name) {
        return note;
      }
    }
  }

  /**
   * Add a note to the meter;
   * @param {any} context
   * @param {Object} attributes
   * @param {string} attributes.name
   * @param {Meter} attributes.meter
   * @param {string} [attributes.description]
   * @return {Note}
   */
  addNote(context, attributes) {
    attributes.meter = this;
    // @ts-ignore
    return new this.constructor.factories.note(attributes);
  }

  /**
   * Text representation.
   * @param {any} context
   * @returns {AsyncIterable<string>}
   */
  async *text(context) {
    yield* toText(
      context,
      this,
      "name",
      this.values(context),
      this.notes(context)
    );
  }
}
