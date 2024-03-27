import test from "ava";
import { Category } from "@konsumation/model";

test("Category attributeValues", t => {
  const values = { name: "C1", description: "sometext" };
  const c = new Category(values);

  t.deepEqual(c.attributeValues, values);
});
