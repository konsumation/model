import { description } from "./attributes.mjs";
import { toText } from "./util.mjs";

/**
 *
 */
export class Note {
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

  get attributeNames() {
    return Object.keys(this.constructor.attributes);
  }

  constructor(values) {
    for (const a of this.attributeNames) {
      this[a] = values[a];
    }
  }

  async write(context) {}

  async delete(context) {}

  async *text(context) {
    yield* toText(context, this, "time");
  }
}
