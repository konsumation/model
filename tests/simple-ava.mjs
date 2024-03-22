import test from "ava";
import { Master } from "@konsumation/model";

test("initialize", async t => {
  const master = new Master();
  await master.initialize('');
  t.truthy(master);
  await master.close();
});

