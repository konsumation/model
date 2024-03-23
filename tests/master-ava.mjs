import test from "ava";
import { Master, SCHEMA_VERSION_CURRENT } from "@konsumation/model";

test("initialize", async t => {
  const master = await Master.initialize("");
  t.is(master.schemaVersion, SCHEMA_VERSION_CURRENT);
  await master.close();
});
