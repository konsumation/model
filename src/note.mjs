import { Base } from "./base.mjs";
import { description } from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 *
 */
export class Note extends Base {
  time;
  /** @type {string} */ description;

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get typeName() {
    return "note";
  }

  static get attributes() {
    return {
      description
    };
  }

  constructor(values) {
    super();
    this.attributeValues = values;
  }

  async write(context) {}

  async delete(context) {}

  async *text(context) {
    yield* toText(context, this, "time");
  }
}
