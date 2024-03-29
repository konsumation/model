import { Base } from "./base.mjs";
import { Meter } from "./meter.mjs";
import { description, name } from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 *
 */
export class Note extends Base {
  /** @type {string} */ name;
  /** @type {string} */ description;
  /** @type {Meter} */ meter;

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get typeName() {
    return "note";
  }

  static get parentTypeName() {
    return "meter";
  }

  static get attributes() {
    return {
      name,
      description,
      meter: Meter
    };
  }

  constructor(values) {
    super();
    this.attributeValues = values;
  }

  toString() {
    return this.name;
  }

  async write(context) {}

  async delete(context) {}

  async *text(context) {
    yield* toText(context, this, "name");
  }
}
