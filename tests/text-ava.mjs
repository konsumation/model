import test from "ava";
import { Master, data } from "./model.mjs";

test("text", async t => {
  const master = await Master.initialize(data);
  const lines = [];

  for await (const line of master.text(master.context)) {
    lines.push(line);
  }

  t.deepEqual(
    [
      "schemaVersion=2",
      '[category "C1"]',
      "description=desc",
      '[meter "M1"]',
      "validfrom=1970-01-01T00:00:00.000Z",
      '[category "C2"]',
      '[meter "M1"]',
      "validfrom=1970-01-01T00:00:00.000Z"
    ],
    lines
  );
});