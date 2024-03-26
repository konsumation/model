import { Meter } from "./meter.mjs";
import { name, description } from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 *
 */
export class Category {
  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get typeName() {
    return "category";
  }

  /** @type {string} */ name;
  /** @type {string} */ description;

  static get attributes() {
    return {
      name,
      description
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

  async delete(context) {}

  /**
   * @return {AsyncIterable<Meter>}
   */
  async *meters(context) {}

  /**
   *
   * @returns Primise<Meter|undefined>
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
    yield* toText(context,this, "name", this.meters(context));
  }
}
