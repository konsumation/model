import test from "ava";
import { Master, SCHEMA_VERSION_CURRENT } from "@konsumation/model";

test("initialize", async t => {
  const master = await Master.initialize({ description: "hello" });
  t.is(master.schemaVersion, SCHEMA_VERSION_CURRENT);
  t.is(master.description, "hello");
  await master.close();
});
