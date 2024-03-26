import { Master, Category, Meter, Note } from "@konsumation/model";

class MyNote extends Note {}

class MyMeter extends Meter {
  constructor(name) {
    super(name);
    this.validFrom = new Date(0);
  }
}

class MyCategory extends Category {
  async *meters() {
    yield new MyMeter({ name: "M1" });
  }
}

class MyMaster extends Master {
  async *categories() {
    yield new MyCategory({ name: "C1", description: "desc" });
    yield new MyCategory({ name: "C2" });
  }
}

export { MyMaster as Master };
export { MyCategory as Category };
export { MyMeter as Meter };
export { MyNote as Note };
