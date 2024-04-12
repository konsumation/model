import test from "ava";
import { testRestoreVersion3 } from "@konsumation/db-test";
import { Master, Category, Meter, Note, emptyData } from "./model.mjs";

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
