import test from "ava";
import {
  Master,
  Category,
  Meter,
  Note,
  Value,
  SCHEMA_VERSION_CURRENT
} from "@konsumation/model";

test("initialize", async t => {
  const master = await Master.initialize({ description: "hello" });
  t.is(master.schemaVersion, SCHEMA_VERSION_CURRENT);
  t.is(master.description, "hello");

  await master.close();
});

test("factories", t => {
  const master = new Master({});

  t.deepEqual(master.factories, {
    master: Master,
    category: Category,
    meter: Meter,
    note: Note,
    value: Value
  });
});
