export class Base {
  static get attributes() {
    return {};
  }

  static get attributeNameMapping() {
    return {};
  }

  static get attributeNames() {
    return Object.keys(this.attributes);
  }

  get attributeNames() {
    // @ts-ignore
    return this.constructor.attributeNames;
  }

  get attributeValues() {
    // @ts-ignore
    const mapping = this.constructor.attributeNameMapping;

    return Object.fromEntries(
      this.attributeNames
        .filter(name => this[name] !== undefined)
        .map(name => [mapping[name] || name, this[name]])
    );
  }

  set attributeValues(values) {
    // @ts-ignore
    const mapping = this.constructor.attributeNameMapping;
    for (const name of this.attributeNames) {
      this[name] = values[mapping[name] || name];
    }
  }
}
