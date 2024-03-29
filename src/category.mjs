import { Base } from "./base.mjs";
import { Meter } from "./meter.mjs";
import { name, description, unit, fractionalDigits } from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 * Value Category.
 *
 */
export class Category extends Base {
  /** @type {string} */ name;
  /** @type {string} */ description;
  /** @type {number} */ fractionalDigits = fractionalDigits.default;
  /** @type {string} */ unit;

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

  constructor(values) {
    super();
    this.attributeValues = values;
  }

  toString() {
    return this.name;
  }

  /**
   * Write into store.
   */
  async write(context) {}

  /**
   * Delete from store.
   */
  async delete(context) {}

  /**
   * List assigned meters.
   * @return {AsyncIterable<Meter>}
   */
  async *meters(context) {}

  /**
   * Add a value to the active meter.
   * @param {*} context
   * @param {Date} time
   * @param {number} value
   * @returns {Promise<any>}
   */
  async addValue(context, time, value) {
    const meter = await this.activeMeter(context);
    return meter.addValue(context, time, value);
  }

  /**
   * Currently active Meter.
   * @returns Promise<Meter|undefined>
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

  async *text(context) {
    yield* toText(context, this, "name", this.meters(context));
  }
}
