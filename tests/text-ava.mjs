import test from "ava";
import { Master } from "@konsumation/model";

test("text", async t => {
  const master = await Master.initialize("");

  const lines = [];

  for await (const line of master.text()) {
    lines.push(line);
  }

  t.deepEqual(["schemaVersion=2"], lines);
});
