import { Base } from "./base.mjs";
import { Meter } from "./meter.mjs";
import { description, validFrom } from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 *
 */
export class Note extends Base {
  /** @type {Date} */ time;
  /** @type {string} */ description;
  /** @type {Meter} */ meter;

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get typeName() {
    return "note";
  }

  static get attributes() {
    return {
      time: validFrom,
      description,
      meter: Meter
    };
  }

  constructor(values) {
    super();
    this.attributeValues = values;
  }

  toString() {
    return this.time;
  }

  async write(context) {}

  async delete(context) {}

  async *text(context) {
    yield* toText(context, this, "time");
  }
}
