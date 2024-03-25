import { Meter } from "./meter.mjs";

/**
 *
 */
export class Category {
  /** @type {string} */ name;
  /** @type {string} */ description;

  get attributeNames() {
    return ["description"];
  }

  constructor(name) {
    this.name = name;
  }

  async delete(master) {}

  /**
   * @return {AsyncIterable<Meter>}
   */
  async *meters() {}

  /**
   * 
   * @returns Primise<Meter|undefined>
   */
  async activeMeter() {
    let meters = [];
    for await (const meter of this.meters()) {
      meters.push(meter);
    }

    meters = meters.sort((a, b) => a.activeSince.time() > b.activeSince.time());
    return meters[0];
  }

  async *text() {
    yield `[category "${this.name}"]`;

    for (const a of this.attributeNames) {
      if (this[a] !== undefined) yield `${a}=${this[a]}`;
    }

    for await (const meter of this.meters()) {
      yield* meter.text();
    }
  }
}
