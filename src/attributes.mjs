import { SCHEMA_VERSION_CURRENT } from "./consts.mjs";

/**
 * @typedef {Object} AttributeDefinition
 *
 * @property {string} type
 * @property {boolean} isKey
 * @property {boolean} writable
 * @property {boolean} mandatory
 * @property {any} [default] the default value
 */

/**
 * @type {AttributeDefinition}
 * Description of the content.
 */
export const description = {
  type: "string",
  writable: true,
  mandatory: false,
  isKey: false
};

/**
 * @type {AttributeDefinition}
 * human identifyable name.
 */
export const name = {
  type: "string",
  writable: true,
  mandatory: true,
  isKey: true
};

/**
 * @type {AttributeDefinition}
 * internal id.
 */
export const id = {
  type: "number",
  writable: true,
  mandatory: false,
  isKey: true
};

/**
 * @type {AttributeDefinition}
 * Physical unit.
 * @return {string}
 */
export const unit = {
  type: "string",
  writable: true,
  mandatory: false,
  isKey: false
};

/**
 * @type {AttributeDefinition}
 * model version.
 */
export const schemaVersion = {
  type: "string",
  writable: false,
  mandatory: true,
  default: SCHEMA_VERSION_CURRENT,
  isKey: false
};

/**
 * @type {AttributeDefinition}
 */
export const serial = {
  type: "string",
  writable: true,
  mandatory: false,
  isKey: false
};

/**
 * @type {AttributeDefinition}
 */
export const validFrom = {
  type: "timestamp",
  writable: true,
  mandatory: true,
  default: new Date(0),
  isKey: false
};

/**
 * @type {AttributeDefinition}
 * Decimal precission.
 */
export const fractionalDigits = {
  type: "number",
  writable: true,
  mandatory: false,
  default: 2,
  isKey: false
};
