import { Master, Category, Meter, Note } from "@konsumation/model";

export const data = {
  categories: [{ name: "C1", description: "desc" }, { name: "C2" }],
  meters: [
    { name: "M1", category: "C1" },
    { name: "M1", category: "C2" }
  ]
};

class MyNote extends Note {}

class MyMeter extends Meter {
  constructor(values) {
    super(values);
    this.validFrom = new Date(0);
  }
}

class MyCategory extends Category {
  async *meters(context) {
    for (const m of context.meters) {
      if (m.category === this.name) {
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
