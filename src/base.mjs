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
   * Prefix of the key
   * @return {string}
   */
  static get keyPrefix() {
    return this.typeName + "s.";
  }

  /**
   * @param {Base} object
   * @return {String} prefix for a given (master) object
   */
  static keyPrefixWith(object) {
    return this.keyPrefix + object.name + ".";
  }

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
    definePropertiesFromOptions(this, options, {
      name: { value: name },
      owner: { value: owner }
    });
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

  get keyPrefix() {
    return this.constructor.keyPrefix;
  }

  /**
   * @return {string}
   */
  get key() {
    return this.keyPrefix + this.name;
  }
}
