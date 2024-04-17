import { Base } from "./base.mjs";
import { Meter } from "./meter.mjs";
import { description, name } from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 *
 */
export class Note extends Base {
  /** @type {string} */ name;
  /** @type {string?} */ description;
  /** @type {Meter} */ meter;

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get type() {
    return "note";
  }

  static get parenttype() {
    return "meter";
  }

  static get attributes() {
    return {
      name,
      description,
      meter: Meter
    };
  }

  /**
   * Create a new Category.
   * @param {Object} attributes
   * @param {string} attributes.name
   * @param {Meter} attributes.meter
   * @param {string} [attributes.description]
   */
  constructor(attributes) {
    super();
    this.setAttributes(attributes);
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
    yield* toText(context, this, "name");
  }
}
