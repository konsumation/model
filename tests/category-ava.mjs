import test from "ava";
import { testCategoryConstructor } from "@konsumation/db-test";
import { Master, data } from "./model.mjs";
import { Category } from "@konsumation/model";

test("Category constructor", t => testCategoryConstructor(t, Category));

test("Category toJSON", t => {
  const category = new Category({
    name: "C1",
    unit: "m3",
    fractionalDigits: 3
  });

  t.deepEqual(category.toJSON(), {
    name: "C1",
    unit: "m3",
    fractionalDigits: 3
  });
});

test("Category meter", async t => {
  const master = await Master.initialize(data);
  const category = await master.category("C1");

  const meter = await category.meter(master.context, "M1");

  t.is(meter.name, "M1");

  t.is(await category.meter(master.context, "M1XX"), undefined);
});


test("Category active meter", async t => {
  const master = await Master.initialize(data);
  const category = await master.category("C1");

  const meter = await category.activeMeter(master.context);

  t.is(meter.name, "M1");
});
