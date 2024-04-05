import { Base } from "./base.mjs";
import { Meter } from "./meter.mjs";
import { Note } from "./note.mjs";
import { name, description, unit, fractionalDigits } from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 * Value Category.
 *
 */
export class Category extends Base {
  /** @type {string} */ name;
  /** @type {string?} */ description;
  /** @type {number?} */ fractionalDigits = fractionalDigits.default;
  /** @type {string?} */ unit;

  static get factories() {
    return {
      [Meter.typeName]: Meter
    };
  }

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get typeName() {
    return "category";
  }

  static get attributes() {
    return {
      name,
      description,
      fractionalDigits,
      unit
    };
  }

  /**
   * Create a new Category.
   * @param {Object} values
   * @param {string} values.name
   * @param {string} [values.description]
   * @param {number} [values.fractionalDigits]
   * @param {string} [values.unit]
   */
  constructor(values) {
    super();
    this.setAttributes(values);
  }

  toString() {
    return this.name;
  }

  /**
   * Write into store.
   * @param {any} context
   */
  async write(context) {}

  /**
   * Delete Category from store.
   * @param {any} context
   */
  async delete(context) {}

  /**
   * List assigned meters.
   * @param {any} context
   * @param {Object} [options]
   * @param {string} [options.gte] from name
   * @param {string} [options.lte] up to name
   * @param {boolean} [options.reverse] order
   * @return {AsyncIterable<Meter>}
   */
  async *meters(context, options) {}

  /**
   * Currently active Meter.
   * @param {any} context
   * @returns {Promise<Meter|undefined>}
   */
  async activeMeter(context) {
    let meters = [];
    for await (const meter of this.meters(context)) {
      meters.push(meter);
    }

    meters = meters.sort(
      (a, b) => a.validFrom.getTime() - b.validFrom.getTime()
    );
    return meters[0];
  }

  /**
   * Add a meter to the category;
   * @param {any} context
   * @param {Object} values
   * @return {Promise<Meter>}
   */
  addMeter(context, values = {}) {
    values.category = this;
    // @ts-ignore
    return new this.constructor.factories.meter(values);
  }

  /**
   * All notes from all meters.
   * @param {any} context
   * @return {AsyncIterable<Note>}
   */
  async *notes(context) {
    for await (const meter of this.meters(context)) {
      yield* meter.notes(context);
    }
  }

  /**
   * All values from all meters.
   * @param {any} context
   * @return {AsyncIterable<{date:Date,value:number}>}
   */
  async *values(context) {
    for await (const meter of this.meters(context)) {
      yield* meter.values(context);
    }
  }

  /**
   * Add a value to the active meter.
   * @param {any} context
   * @param {Date} time
   * @param {number} value
   * @returns {Promise<any>}
   */
  async writeValue(context, time, value) {
    const meter = await this.activeMeter(context);
    this.checkMeterIsPresent(meter);
    // @ts-ignore
    return meter.writeValue(context, time, value);
  }

  checkMeterIsPresent(meter) {
    if (meter === undefined) {
      const error = new Error(`no active meter in category ${this.name}`);
      error.category = this;
      throw error;
    }
  }

  /**
   * Delete a value from the active meter.
   * @param {any} context
   * @param {Date} time
   * @returns {Promise<any>}
   */
  async deleteValue(context, time) {
    const meter = await this.activeMeter(context);
    this.checkMeterIsPresent(meter);
    // @ts-ignore
    return meter.deleteValue(context, time);
  }

  /**
   * Text representation.
   * @param {any} context
   * @returns {AsyncIterable<string>}
   */
  async *text(context) {
    yield* toText(context, this, "name", this.meters(context));
  }
}
