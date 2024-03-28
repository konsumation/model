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

    const values = {};

    for (const key of this.attributeNames) {
      if (this[key] !== undefined) {
        if (mapping[key] === null) {
        } else {
          values[mapping[key] || key] = this[key];
        }
      }
    }

    for (const [exp, key] of Object.entries(mapping)) {
      if (key !== null) {
        const path = exp.split(/\./);
        const last = path.pop();

        let o = this;
        for (const k of path) {
          o = o[k];
        }

        if (o) {
          values[key] = o[last];
        } else {
          // throw new Error(`unable to access ${exp}`);
        }
      }
    }

    return values;
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

  toJSON() {
    return this.attributeValues;
  }
}
