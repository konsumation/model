import test from "ava";
import { SCHEMA_VERSION_3 } from "@konsumation/model";

test("SCHEMA_VERSION_3", t => t.is(SCHEMA_VERSION_3, "3"));
