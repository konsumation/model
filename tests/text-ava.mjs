import test from "ava";
import { Master } from "./model.mjs";

test("text", async t => {
  const master = await Master.initialize("");

  const lines = [];

  for await (const line of master.text()) {
    lines.push(line);
  }

  t.deepEqual(
    [
      "schemaVersion=2",
      '[category "C1"]',
      '[meter "M1"]',
      "validFrom=1970-01-01T00:00:00.000Z",
      '[category "C2"]',
      '[meter "M1"]',
      "validFrom=1970-01-01T00:00:00.000Z"
    ],
    lines
  );
});
