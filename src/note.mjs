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

  constructor(values) {
    for (const a of this.attributeNames) {
      this[a] = values[a];
    }
  }

  get attributeNames() {
    return Object.keys(this.constructor.attributes);
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

  async *text(context) {
    yield* toText(context, this, "time");
  }
}
