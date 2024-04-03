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
   * Attribute names on the javascript side.
   * @return {string[]}
   */
  static get attributeNames() {
    return Object.keys(this.attributes);
  }

  /**
   * Attribute names on the javascript side.
   * @return {string[]}
   */
  get attributeNames() {
    // @ts-ignore
    return this.constructor.attributeNames;
  }

  /**
   * Object keys are the mapped external attribute names.
   * @return {Object}
   */
  getAttributes() {
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
  setAttributes(values) {
    if (values) {
      // @ts-ignore
      const mapping = this.constructor.attributeNameMapping;

      for (const name of this.attributeNames) {
        const value = values[mapping[name] || name];

        if (value === undefined) {
          /*     if(this[name] !== undefined) {
            this[name] = value;
          }*/
        } else {
          this[name] = value;
        }
      }
    }
  }

  /**
   * @return {string}
   */
  get typeName() {
    // @ts-ignore
    return this.constructor.typeName;
  }

  toJSON() {
    return this.getAttributes();
  }
}
