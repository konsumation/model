import test from "ava";
import { Meter } from "@konsumation/model";

test("Meter attributeValues", t => {
  const values = { serial: "M1", description: "sometext" };
  const m = new Meter(values);

  t.deepEqual(m.attributeValues, values);
});
