import test from "ava";
import { testMeterConstructor } from "@konsumation/db-test";
import { Category, Meter, Note } from "@konsumation/model";

test("Meter constructor", t => testMeterConstructor(t, Meter));

test("Meter default values from Category", t => {
  const category = new Category({ unit: "m3", fractionalDigits: 4 });
  const meter = new Meter({ category });

  t.is(meter.category, category);
  t.is(meter.unit, "m3");
  t.is(meter.fractionalDigits, 4);
  t.is(meter.isAggregating, true);
});

test("Meter convert dates", t => {
  const category = new Category({});
  const meter = new Meter({ category, validFrom: "1970-01-01T01:00:00.000Z" });

  t.deepEqual(meter.validFrom, new Date(3600000));
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
    validFrom: "1970-01-01T00:00:00.000Z",
    isAggregating: true
  });
});

test("Meter localAttributes", t => {
  const context = {};

  const category = new Category({
    name: "C1",
    unit: "m3",
    fractionalDigits: 3
  });
  const meter = category.addMeter(context, { name: "M1.ev.1", serial: "123" });

  t.deepEqual(meter.getLocalAttributes(), {
    name: "M1.ev.1",
    serial: "123",
    unit: "m3",
    fractionalDigits: 3,
    validFrom: new Date(0),
    isAggregating: true
  });
});

test("Meter isDefinedAttribute", t => {
  const category = new Category({
    name: "C1",
    unit: "m3",
    fractionalDigits: 3
  });

  let meter = new Meter({
    category,
    name: "C1",
    unit: "m3",
    fractionalDigits: 3
  });

  t.true(meter.isDefinedAttribute('name'));
  t.true(meter.isDefinedAttribute('unit'));
  t.true(meter.isDefinedAttribute('fractionalDigits'));

  meter = new Meter({
    category,
    name: "C1",
  });

  t.false(meter.isDefinedAttribute('unit'));
  t.false(meter.isDefinedAttribute('fractionalDigits'));
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
