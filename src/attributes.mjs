/**
 * Description of the content.
 */
export const description = { type: "string", writable: true };
export const name = { type: "string", writable: true };
export const id = { type: "number", writable: true };

/**
 * Physical unit.
 * @return {string}
 */
export const unit = { type: "string", writable: true };
export const schemaVersion = { type: "string", writable: true };
export const serial = { type: "string", writable: true };
export const validFrom = { type: "timestamp", writable: true };

/**
 * Precission
 * @return {number}
 */
export const fractionalDigits = { type: "number", default: 2, writable: true };
