
export const METER_ATTRIBUTES = {
  /**
   * Physical unit.
   * @return {string}
   */
  unit: { type: "string", writable: true },

  /**
   * Precission
   * @return {number}
   */
  fractionalDigits: { type: "number", default: 2, writable: true }
};
