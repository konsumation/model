import test from "ava";
import { testCategoryConstructor } from "@konsumation/db-test";
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
