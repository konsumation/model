import test from "ava";
import { Note } from "@konsumation/model";

test("Note attributeValues", t => {
  const values = { /* time: new Date(),*/ description: "sometext" };
  const n = new Note(values);

  t.deepEqual(n.attributeValues, values);
});
