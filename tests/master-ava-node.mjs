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

test("query one category", async t => {
  const master = await Master.initialize(data);
  t.is((await master.one({ category: "C1" })).name, "C1");
});

test("query one meter", async t => {
  const master = await Master.initialize(data);
  t.is((await master.one({ category: "C1", meter: "M1" })).name, "M1");
});

test("query one note", async t => {
  const master = await Master.initialize(data);
  const nn = new Date(0).toISOString();
  t.is((await master.one({ category: "C1", meter: "M1", note: nn })).name, nn);
});

async function collect(it) {
  const all = [];

  for await (const one of it) {
    all.push(one);
  }

  return all;
}

test("query all category", async t => {
  const master = await Master.initialize(data);
  const all = await collect( master.all({}));

  t.deepEqual(
    all.map(a => a.name),
    ["C1", "C2"]
  );
});

test("query all meter", async t => {
  const master = await Master.initialize(data);
  const all = await collect(master.all({ category: "C1", meter: "*" }));

  t.deepEqual(
    all.map(a => a.name),
    ["M1"]
  );
});

test("query all note", async t => {
  const master = await Master.initialize(data);

  const all = await collect(
    master.all({
      category: "C1",
      meter: "M1",
      note: "*"
    })
  );

  t.deepEqual(
    all.map(a => a.name),
    [new Date(0).toISOString()]
  );
});
