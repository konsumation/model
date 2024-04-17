import { Base } from "./base.mjs";
import { Meter } from "./meter.mjs";
import { value, date } from "./attributes.mjs";

/**
 *
 */
export class Value extends Base {
  /** @type {Meter} */ meter;
  /** @type {Date} */ date;
  /** @type {number} */ value;

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get type() {
    return "value";
  }

  static get parenttype() {
    return "meter";
  }

  static get attributes() {
    return {
      meter: Meter,
      date,
      value
    };
  }

  /**
   * Create a new Category.
   * @param {Object} attributes
   * @param {Date} attributes.date
   * @param {Meter} attributes.meter
   * @param {number} attributes.value
   */
  constructor(attributes) {
    super();
    this.setAttributes(attributes);
  }

  get name()
  {
    return this.date.toISOString();
  }

  toString() {
    return this.date.toISOString();
  }

  toJSON() {
    const json = super.toJSON();
    delete json.meter; // TODO handle in base impl ?
    return json;
  }

  /**
   * Write into store.
   * @param {any} context
   */
  async write(context) {}

  /**
   * Delete from store.
   * @param {any} context
   */
  async delete(context) {}

  /**
   * Text representation.
   * @param {any} context
   * @returns {AsyncIterable<string>}
   */
  async *text(context) {
    yield `${this.date.toISOString()} ${this.value}`;
  }
}
