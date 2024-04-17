import test from "ava";
import { testValueConstructor } from "@konsumation/db-test";
import { Master, Category, Meter, Value, data } from "./model.mjs";

test("Value constructor", t => testValueConstructor(t, Value));

test("Value name", t => {
  const category = new Category({ name: "C1" });
  const meter = new Meter({ category, name: "M1" });
  const value = new Value({ meter, date: new Date(0), value: 1 });
  t.is(value.name, "1970-01-01T00:00:00.000Z");
});

test("Meter/Category values", async t => {
  const master = await Master.initialize(data);
  const context = master.context;
  const category = await master.category(context, "C1");
  const meter = await category.meter(context, "M1");

  const values = [];

  for await (const value of meter.values(context)) {
    values.push(value);
  }
  t.is(values.length, 2);

  const exp = new Value({
    date: new Date(1000),
    value: 2,
    meter
  });

  t.deepEqual(await meter.latestValue(context), exp);
  t.deepEqual(await category.latestValue(context), exp);
});

test("Value toJSON", t => {
  const context = {};

  const category = new Category({
    name: "C1"
  });
  const meter = category.addMeter(context, { name: "M1" });

  const value = new Value({
    meter,
    date: new Date(0),
    value: 1.2
  });

  t.deepEqual(value.toJSON(), {
    date: "1970-01-01T00:00:00.000Z",
    value: 1.2
  });
});

test("Value localAttributes", t => {
  const context = {};

  const category = new Category({
    name: "C1"
  });
  const meter = category.addMeter(context, { name: "M1" });

  const value = new Value({
    meter,
    date: new Date(0),
    value: 1.2
  });

  t.deepEqual(value.getLocalAttributes(), {
    date: new Date(0),
    value: 1.2
  });
});
