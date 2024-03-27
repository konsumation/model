export class Base {

  /**
   * Attribute definitions.
   * @return {object}
   */
  static get attributes() {
    return {};
  }

  /**
   * Maping of attribute names from internal (javascript) to external (database).
   * @return {object}
   */
  static get attributeNameMapping() {
    return {};
  }

  /**
   * Attribute names on the javacript side.
   * @return {string[]}
   */
  static get attributeNames() {
    return Object.keys(this.attributes);
  }

  get attributeNames() {
    // @ts-ignore
    return this.constructor.attributeNames;
  }

  /**
   * Object keys are the mapped external attribute names.
   * @return {object}
   */
  get attributeValues() {
    // @ts-ignore
    const mapping = this.constructor.attributeNameMapping;

    return Object.fromEntries(
      this.attributeNames
        .filter(name => this[name] !== undefined)
        .map(name => [mapping[name] || name, this[name]])
    );
  }
  /**
   * Sets values with external attribute names.
   * @param {object} values
   */
  set attributeValues(values) {
    // @ts-ignore
    const mapping = this.constructor.attributeNameMapping;
    for (const name of this.attributeNames) {
      this[name] = values[mapping[name] || name];
    }
  }
}
