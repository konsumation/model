import test from "ava";
import { Master, Category, Meter } from "@konsumation/model";

class MyMeter extends Meter {
  constructor(name) {
    super(name);
    this.validFrom = new Date(0);
  }
}

class MyCategory extends Category {
  async *meters() {
    yield new MyMeter("M1");
  }
}

class MyMaster extends Master {
  async *categories() {
    yield new MyCategory("C1");
    yield new MyCategory("C2");
  }
}

test("text", async t => {
  const master = await MyMaster.initialize("");

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
