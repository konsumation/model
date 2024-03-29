/**
 *
 */
export class Base {
  /**
   * Attribute definitions.
   * @return {Object}
   */
  static get attributes() {
    return {};
  }

  /**
   * Maping of attribute names from internal (javascript) to external (database).
   * @return {Object}
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
   * @return {Object}
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

        if (o?.[last] !== undefined) {
          values[key] = o[last];
        }
      }
    }

    return values;
  }

  /**
   * Sets values with external attribute names.
   * @param {Object} values
   */
  set attributeValues(values) {
    if (values) {
      // @ts-ignore
      const mapping = this.constructor.attributeNameMapping;

      for (const name of this.attributeNames) {
        this[name] = values[mapping[name] || name];
      }
    }
  }

  get typeName() {
    // @ts-ignore
    return this.constructor.typeName;
  }

  toJSON() {
    return this.attributeValues;
  }
}
