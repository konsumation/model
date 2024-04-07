import test from "ava";
import { testNoteConstructor } from "@konsumation/db-test";
import { Category, Note } from "@konsumation/model";

test("Note constructor", t => testNoteConstructor(t, Note));

test("Note toJSON", t => {
  const category = new Category({
    name: "C1",
    unit: "m3",
    fractionalDigits: 3
  });
  const meter = category.addMeter({ name: "M1", serial: "123" });

  const note = new Note({
    meter,
    name: "N1"
  });

  t.deepEqual(note.toJSON(), {
    name: "N1"
  });
});
