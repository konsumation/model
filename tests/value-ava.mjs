import test from "ava";
import { testValueConstructor } from "@konsumation/db-test";
import { Master, Value, data } from "./model.mjs";

test("Value constructor", t => testValueConstructor(t, Value));

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
