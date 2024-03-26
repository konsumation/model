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

  get attributes() {
    return {
      name,
      description
    };
  }

  get attributeNames() {
    return Object.keys(this.attributes);
  }

  constructor(values) {
    for (const a of this.attributeNames) {
      this[a] = values[a];
    }
  }

  async delete(master) {}

  /**
   * @return {AsyncIterable<Meter>}
   */
  async *meters() {}

  /**
   *
   * @returns Primise<Meter|undefined>
   */
  async activeMeter() {
    let meters = [];
    for await (const meter of this.meters()) {
      meters.push(meter);
    }

    meters = meters.sort(
      (a, b) => a.validFrom.getTime() - b.validFrom.getTime()
    );
    return meters[0];
  }

  async *text() {
    yield* toText(this, "name", this.meters());
  }
}
