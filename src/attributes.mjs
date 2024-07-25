import { SCHEMA_VERSION_CURRENT } from "./consts.mjs";

/**
 * @typedef {Object} AttributeDefinition
 *
 * @property {string} type
 * @property {RegExp} [regex]
 * @property {boolean} isKey
 * @property {boolean} isForeign do we represent a foreign entity
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
  isKey: false,
  isForeign: false
};

/**
 * @type {AttributeDefinition}
 * human identifyable name.
 */
export const name = {
  type: "string",
  regex: /^[\w\._\-\:]+$/,
  writable: true,
  mandatory: true,
  isKey: true,
  isForeign: false
};

/**
 * @type {AttributeDefinition}
 * internal id.
 */
export const id = {
  type: "number",
  writable: true,
  mandatory: false,
  isKey: true,
  isForeign: false
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
  isKey: false,
  isForeign: false
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
  isKey: false,
  isForeign: false
};

/**
 * @type {AttributeDefinition}
 */
export const serial = {
  type: "string",
  writable: true,
  mandatory: false,
  isKey: false,
  isForeign: false
};

/**
 * @type {AttributeDefinition}
 */
export const validFrom = {
  type: "timestamp",
  writable: true,
  mandatory: true,
  default: new Date(0),
  isKey: false,
  isForeign: false
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
  isKey: false,
  isForeign: false
};

/**
 * @type {AttributeDefinition}
 * sort order.
 */
export const order = {
  type: "number",
  writable: true,
  mandatory: true,
  default: 1,
  isKey: false,
  isForeign: false
};

/**
 * @type {AttributeDefinition}
 * measured value.
 */
export const value = {
  type: "number",
  writable: true,
  mandatory: true,
  isKey: false,
  isForeign: false
};

/**
 * @type {AttributeDefinition}
 */
export const date = {
  type: "timestamp",
  writable: true,
  mandatory: true,
  isKey: false,
  isForeign: false
};

/**
 * @type {AttributeDefinition}
 */
export const isAggregating = {
  type: "boolean",
  writable: true,
  mandatory: true,
  isKey: false,
  isForeign: false,
  default: true
};
