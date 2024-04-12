import test from "ava";
import { testRestoreVersion3 } from "@konsumation/db-test";
import { Master, Category, Meter, Note, emptyData, data } from "./model.mjs";

test("testRestoreVersion3", async t =>
  testRestoreVersion3(t, Master, emptyData));

test("factories", t => {
  t.deepEqual(new Master().factories, {
    master: Master,
    category: Category,
    meter: Meter,
    note: Note
  });
});

test("query category", async t => {
  const master = await Master.initialize(data);
  t.is((await master.one({ category: "C1" })).name, "C1");
});

test("query meter", async t => {
  const master = await Master.initialize(data);
  t.is((await master.one({ category: "C1", meter: "M1" })).name, "M1");
});

test("query note", async t => {
  const master = await Master.initialize(data);
  const nn = new Date(0).toISOString();
  t.is((await master.one({ category: "C1", meter: "M1", note: nn })).name, nn);
});
