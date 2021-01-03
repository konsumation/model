import { Base } from "./base.mjs";
import { METER_ATTRIBUTES } from "./consts.mjs";

/**
 * Value Category.
 * @param {string} name category name
 * @param {Object} options
 * @param {string} options.description
 * @param {string} options.unit physical unit like kWh or m3
 * @param {number} options.fractionalDigits display precission
 *
 * @property {string} name category name
 * @property {string} description
 * @property {string} unit physical unit
 * @property {number} fractionalDigits display precission
 */
export class Category extends Base {
  static get attributes() {
    return {
      ...super.attributes,
      ...METER_ATTRIBUTES
    };
  }

  static get keyPrefix() {
    return "categories.";
  }
}
