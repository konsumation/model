export async function* toText(context, object, key, ...iterators) {

  if(key) {
    yield `[${object.constructor.typeName} "${object[key]}"]`;
  }

  for (const a of object.attributeNames) {
    if (a !== key) {
      let value = object[a];
      if (value !== undefined) {
        if (value instanceof Date) {
          value = value.toISOString();
        }
        yield `${a}=${value}`;
      }
    }
  }

  for (const iterator of iterators) {
    for await (const object of iterator) {
      yield* object.text(context);
    }
  }
}
