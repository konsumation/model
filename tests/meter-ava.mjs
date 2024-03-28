import test from "ava";
import { testMeterConstructor } from "@konsumation/db-test";
import { Meter } from "@konsumation/model";

test("Meter constructor", t => testMeterConstructor(t, Meter));
