import test from "ava";
import { Master, data } from "./model.mjs";

test("text", async t => {
  const master = await Master.initialize(data);
  const lines = [];

  for await (const line of master.text(master.context)) {
    lines.push(line);
  }

  //console.log(lines);
  t.deepEqual(
    [
      "schemaVersion=3",
      '[category "C1"]',
      "description=desc",
      "fractionalDigits=2",
      "order=1",
      '[meter "M1"]',
      "category=C1",
      "validFrom=1970-01-01T00:00:00.000Z",
      "fractionalDigits=4",
      "1970-01-01T00:00:00.000Z 1",
      "1970-01-01T00:00:01.000Z 2",
      '[note "1970-01-01T00:00:00.000Z"]',
      "description=a note",
      "meter=M1",
      '[category "C2"]',
      "fractionalDigits=2",
      "order=1",
      '[meter "M1"]',
      "category=C2",
      "validFrom=1970-01-01T00:00:00.000Z",
      "fractionalDigits=2"
    ],
    lines
  );
});
