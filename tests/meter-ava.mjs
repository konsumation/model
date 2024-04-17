import test from "ava";
import { testMeterConstructor } from "@konsumation/db-test";
import { Category, Meter, Note } from "@konsumation/model";

test("Meter constructor", t => testMeterConstructor(t, Meter));

test("Meter default values from Category", t => {
  const category = new Category({ unit: "m3", fractionalDigits: 3 });
  const meter = new Meter({ category });

  t.is(meter.category, category);
  t.is(meter.unit, "m3");
  t.is(meter.fractionalDigits, 3);
});

test("Meter convert dates", t => {
  const category = new Category({});
  const meter = new Meter({ category, validFrom: "1970-01-01T00:00:00.000Z" });

  t.deepEqual(meter.validFrom, new Date(0));
});

test("Meter toJSON", t => {
  const context = {};

  const category = new Category({
    name: "C1",
    unit: "m3",
    fractionalDigits: 3
  });
  const meter = category.addMeter(context, { name: "M1", serial: "123" });

  t.deepEqual(meter.toJSON(), {
    name: "M1",
    serial: "123",
    unit: "m3",
    fractionalDigits: 3,
    validFrom: "1970-01-01T00:00:00.000Z"
  });
});

test("Meter add Note", t => {
  const context = {};

  const category = new Category({
    name: "C1",
    unit: "m3",
    fractionalDigits: 3
  });
  const meter = category.addMeter(context, { name: "M1" });
  const note = meter.addNote(context, { name: new Date() });

  t.is(note.type, Note.type);
});
