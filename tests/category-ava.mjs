import test from "ava";
import { Category } from "@konsumation/model";

test("Category attributeValues", t => {
  const values = { name: "C1", description: "sometext" };
  const c = new Category(values);

  t.is(c.name, "C1");
  t.is(c.description, "sometext");
  
  t.deepEqual(c.attributeValues, values);
});
