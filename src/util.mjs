import { Base } from "./base.mjs";

/**
 * Text representation.
 * @param {any} context
 * @param {Base} object
 * @param {string} key
 * @returns {AsyncIterable<string>}
 */
export async function* toText(context, object, key, ...iterators) {
  if (key) {
    // @ts-ignore
    yield `[${object.constructor.type} "${object[key]}"]`;
  }

  for (const [k, v] of Object.entries(object.toJSON())) {
    if (k !== key && v !== undefined) {
      yield `${k}=${v}`;
    }
  }

  for (const iterator of iterators) {
    for await (const object of iterator) {
      yield* object.text(context);
    }
  }
}
