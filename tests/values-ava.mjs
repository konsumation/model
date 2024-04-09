import test from "ava";
import { Master, data } from "./model.mjs";

test("Meter/Category values", async t => {
  const master = await Master.initialize(data);
  const category = await master.category("C1");
  const meter = await category.meter(master.context, "M1");

  const values = [];

  for await (const value of meter.values(master.context)) {
    values.push(value);
  }
  t.is(values.length, 2);

  const exp = {
    date: new Date(1000),
    value: 2
  };

  t.deepEqual(await meter.latestValue(master.context), exp);
  t.deepEqual(await category.latestValue(master.context), exp);
});
