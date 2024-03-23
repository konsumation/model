import test from "ava";
import { Master } from "@konsumation/model";

test("initialize", async t => {
  const master = await Master.initialize("");
  t.truthy(master);
  await master.close();
});
