import { Master, Category, Meter, Note } from "@konsumation/model";

export const data = {
  categories: [{ name: "C1", description: "desc" }, { name: "C2" }],
  meters: [
    {
      serial: "M1",
      category: "C1",
      fractional_digits: 4,
      validFrom: new Date(0)
    },
    { serial: "M1", category: "C2", validFrom: new Date(0) }
  ],
  notes: [
    { category: "C1", meter: "M1", time: 0 /*new Date(0)*/, description: "a note" }
  ]
};

class MyNote extends Note {}

class MyMeter extends Meter {
  static get attributeNameMapping() {
    return { fractionalDigits: "fractional_digits" };
  }

  async *notes(context) {
    for (const n of context.notes) {
      if (n.category === this.category.name && n.meter === this.serial) {
        n.meter = this;
        yield new MyNote(n);
      }
    }
  }
}

class MyCategory extends Category {
  async *meters(context) {
    for (const m of context.meters) {
      if (m.category === this.name) {
        m.category = this;
        yield new MyMeter(m);
      }
    }
  }
}

class MyMaster extends Master {
  constructor(data) {
    super(data);
    this.context = data;
  }

  async *categories(context) {
    for (const c of this.context.categories) {
      yield new MyCategory(c);
    }
  }
}

export { MyMaster as Master };
export { MyCategory as Category };
export { MyMeter as Meter };
export { MyNote as Note };
