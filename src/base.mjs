import { definePropertiesFromOptions, optionJSON } from "./attribute.mjs";

/**
 * Base
 * @param {string} name meter name
 * @param {Object} options
 * @param {string} options.description
 * @param {string} options.unit physical unit like kWh or m3
 *
 * @property {string} name category name
 * @property {string} description
 * @property {string} unit physical unit
 */
export class Base {

  /**
   * Name of the type in text dump
   * @return {string}
   */
  static get typeName() {
    return this.name.toLowerCase();
  }

  /**
   * Additional attributes to be persisted
   */
  static get attributes() {
    return {
      /**
       * Description of the content.
       * @return {string}
       */
      description: { type: "string", writable: true }
    };
  }

  constructor(name, owner, options) {
    this.name = name;
    this.owner = owner;
    definePropertiesFromOptions(this, options);
  }

  toString() {
    return `${this.name}: ${this.unit}`;
  }

  toJSON() {
    return optionJSON(this, {
      name: this.name
    });
  }

  get typeName() {
    return this.constructor.typeName;
  }

}
