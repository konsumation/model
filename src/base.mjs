/**
 *
 */
export class Base {
  /* act like a Attribute */
  static get writable() {
    return true;
  }

  static get mandatory() {
    return true;
  }

  static get isKey() {
    return false;
  }

  static get isForeign() {
    return true;
  }

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
   * Is the given attribute defined in the target.
   * Some attributes are inherited from parent object and therfore not defined in the target.
   * @param {string} name
   * @returns {boolean}
   */
  isDefinedAttribute(name) {
    return this[name] !== undefined;
  }

  /**
   * Object keys are the mapped external attribute names.
   * @return {Object}
   */
  _getAttributes(mapping) {
    const values = {};

    // @ts-ignore
    const attributes = this.constructor.attributes;

    for (const key of Object.keys(attributes)) {
      if (this[key] !== undefined) {
        values[mapping?.[key] || key] = this[key];
      }
    }

    if (mapping) {
      for (const [exp, key] of Object.entries(mapping)) {
        if (key !== null) {
          const path = exp.split(/\./);
          const last = path.pop();

          let o = this;
          for (const k of path) {
            o = o[k];
          }

          // @ts-ignore
          if (o?.[last] !== undefined) {
            // @ts-ignore
            values[key] = o[last];
          }
        }
      }
    }

    return values;
  }

  getAttributes() {
    // @ts-ignore
    return this._getAttributes(this.constructor.attributeNameMapping);
  }

  /**
   * Object keys are the mapped external attribute names but only for local (not isForeign) ones.
   * @return {Object}
   */
  getLocalAttributes(mapping) {
    // @ts-ignore
    const attributes = this.constructor.attributes;
    const values = this._getAttributes(mapping);
    for (const k of Object.keys(values)) {
      if (attributes[k]?.isForeign) {
        delete values[k];
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
      const attributes = this.constructor.attributes;

      // @ts-ignore
      const mapping = this.constructor.attributeNameMapping;

      for (const name of Object.keys(attributes)) {
        let value = values[mapping[name]] || values[name];

        if (value === undefined || value === null) {
          /*     if(this[name] !== undefined) {
            this[name] = value;
          }*/
        } else {
          if (typeof value === "string") {
            const attribute = attributes[name];
            if (attribute) {
              if (attribute.regex && !value.match(attribute.regex)) {
                const error = new Error("invalid value");
                error.attribute = attribute;
                error.value = value;
                throw error;
              }
              else if (attribute?.type === "timestamp") {
                value = new Date(value);
              }
            }
          }

          this[name] = value;
        }
      }
    }
  }

  /**
   * @return {string}
   */
  get type() {
    // @ts-ignore
    return this.constructor.type;
  }

  toJSON() {
    const values = this.getLocalAttributes();
    for (const [k, v] of Object.entries(values)) {
      if (this.isDefinedAttribute(k)) {
        if (v instanceof Date) {
          values[k] = v.toISOString();
        }
      } else {
        delete values[k];
      }
    }
    return values;
  }
}
