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

  get attributes() {
    return {
      description
    };
  }

  get attributeNames() {
    return Object.keys(this.attributes);
  }

  async delete(master) {}

  async *text() {
    yield* toText(this, "time");
  }
}
