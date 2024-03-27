import { Meter } from "./meter.mjs";
import { name, description } from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 * Value Category.
 *
 */
export class Category {
  /** @type {string} */ name;
  /** @type {string} */ description;

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
      description
    };
  }

  static get attributeNames() {
    return Object.keys(this.attributes);
  }

  /**
   * @param {object} values
   */
  constructor(values) {
    for (const a of this.attributeNames) {
      this[a] = values[a];
    }
  }

  get attributeNames() {
    return this.constructor.attributeNames;
  }

  get attributeValues() {
    return Object.fromEntries(
      this.attributeNames
        .filter(a => this[a] !== undefined)
        .map(a => [a, this[a]])
    );
  }

  async write(context) {}
  async delete(context) {}

  /**
   * @return {AsyncIterable<Meter>}
   */
  async *meters(context) {}

  /**
   * Add a value to the current meter
   * @param {*} context 
   * @param {*} time 
   * @param {*} value 
   * @returns {Promise<any>}
   */
  async addValue(context, time, value) {
    const meter = await this.activeMeter(context);
    return meter.addValue(context, time, value);
  }

  /**
   * newest Meter
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
