import { SCHEMA_VERSION_CURRENT } from "./consts.mjs";

/**
 * Description of the content.
 */
export const description = { type: "string", writable: true, mandatory: false };
export const name = { type: "string", writable: true, mandatory: true };
export const id = { type: "number", writable: true, isKey: true };

/**
 * Physical unit.
 * @return {string}
 */
export const unit = { type: "string", writable: true, mandatory: false };
export const schemaVersion = {
  type: "string",
  writable: true,
  mandatory: true,
  default: SCHEMA_VERSION_CURRENT
};
export const serial = { type: "string", writable: true, mandatory: false };
export const validFrom = { type: "timestamp", writable: true };

/**
 * Precission
 * @return {number}
 */
export const fractionalDigits = {
  type: "number",
  default: 2,
  writable: true,
  mandatory: true
};
