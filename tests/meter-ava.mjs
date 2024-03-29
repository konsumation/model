import test from "ava";
import { testMeterConstructor } from "@konsumation/db-test";
import { Category, Meter } from "@konsumation/model";

test("Meter constructor", t => testMeterConstructor(t, Meter));

test("Meter default values from Category", t => {
    const category = new Category({ unit: "m3", fractionalDigits: 3});
    const meter = new Meter({category});

    t.is(meter.unit, "m3");
    t.is(meter.fractionalDigits, 3);
});