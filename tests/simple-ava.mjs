import test from "ava";
import { Master } from "@konsumation/model";

test("initialize", t => {
  const master = new Master();
  master.initialize('');
  t.truthy(master);
});

