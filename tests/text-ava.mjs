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
      "schemaVersion=3",
      '[category "C1"]',
      "description=desc",
      '[meter "M1"]',
      "validFrom=1970-01-01T00:00:00.000Z",
      "fractionalDigits=4",
      "category=C1",
      '[note "0"]',
      "description=a note",
      "meter=M1",
      '[category "C2"]',
      '[meter "M1"]',
      "validFrom=1970-01-01T00:00:00.000Z",
      "category=C2"
    ],
    lines
  );
});
