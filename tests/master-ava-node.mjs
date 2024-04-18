import test from "ava";
import { testRestoreVersion3 } from "@konsumation/db-test";
import {
  Master,
  Category,
  Meter,
  Note,
  Value,
  emptyData,
  data
} from "./model.mjs";

test("testRestoreVersion3", async t =>
  testRestoreVersion3(t, Master, emptyData));

test("factories", t => {
  t.deepEqual(new Master().factories, {
    master: Master,
    category: Category,
    meter: Meter,
    note: Note,
    value: Value
  });
});

test("query one category", async t => {
  const master = await Master.initialize(data);
  t.is((await master.one({ category: "C1" })).name, "C1");
});

test("query one category not exising", async t => {
  const master = await Master.initialize(data);
  t.is(await master.one({ category: "not exising" }), undefined);
});

test("query one meter", async t => {
  const master = await Master.initialize(data);
  t.is((await master.one({ category: "C1", meter: "M1" })).name, "M1");
});

test("query one meter not exising", async t => {
  const master = await Master.initialize(data);
  t.is(await master.one({ category: "C1", meter: "not exising" }), undefined);
  t.is(await master.one({ category: "not exising", meter: "M1" }), undefined);
});

test("query one note", async t => {
  const master = await Master.initialize(data);
  const nn = new Date(0).toISOString();
  t.is((await master.one({ category: "C1", meter: "M1", note: nn })).name, nn);
});

test("query one note not exising", async t => {
  const master = await Master.initialize(data);
  const nn = new Date(0).toISOString();
  t.is(
    await master.one({ category: "C1", meter: "M1", note: "not exising" }),
    undefined
  );
  t.is(
    await master.one({ category: "C1", meter: "not exising", note: nn }),
    undefined
  );
  t.is(
    await master.one({ category: "not exising", meter: "M1", note: nn }),
    undefined
  );
});

test("query one value", async t => {
  const master = await Master.initialize(data);
  const nn = new Date(0).toISOString();

  t.is(
    (await master.one({ category: "C1", meter: "M1", value: new Date(0) }))
      .name,
    nn
  );
});

test("query one value string", async t => {
  const master = await Master.initialize(data);
  const nn = new Date(0).toISOString();

  t.is(
    (
      await master.one({
        category: "C1",
        meter: "M1",
        value: new Date(0).toISOString()
      })
    ).name,
    nn
  );
});

test("query one value not exising", async t => {
  const master = await Master.initialize(data);
  const nn = new Date(0).toISOString();

  t.is(
    await master.one({ category: "C1", meter: "M1", value: new Date() }),
    undefined
  );
  t.is(
    await master.one({
      category: "C1",
      meter: "not exising",
      value: new Date(0)
    }),
    undefined
  );
  t.is(
    await master.one({
      category: "not exising",
      meter: "M1",
      value: new Date(0)
    }),
    undefined
  );
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
  const all = await collect(master.all({ category: "*" }));

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

test("query all meter -> empty", async t => {
  const master = await Master.initialize(data);
  const all = await collect(
    master.all({ category: "not exising", meter: "*" })
  );

  t.deepEqual(
    all.map(a => a.name),
    []
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

test("query all meter values", async t => {
  const master = await Master.initialize(data);

  const all = await collect(
    master.all({
      category: "C1",
      meter: "M1",
      value: "*"
    })
  );

  t.deepEqual(
    all.map(a => a.name),
    [new Date(0).toISOString(), new Date(1000).toISOString()]
  );
});
