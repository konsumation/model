import { Master, Category, Meter, Note } from "@konsumation/model";

class MyNote extends Note {
}

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

export { MyMaster as Master };
export { MyCategory as Category };
export { MyMeter as Meter };
export { MyNote as Note };
