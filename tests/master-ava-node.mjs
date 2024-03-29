import test from "ava";
import { testRestoreVersion3 } from "@konsumation/db-test";
import { Master, emptyData } from "./model.mjs";

test.skip("testRestoreVersion3", async t =>

  testRestoreVersion3(t, Master, emptyData));
