import test from "ava";
import { Master, Base, Category, validFrom } from "@konsumation/model";

class MyBase extends Base {
  static get attributes() {
    return {
      validFrom,
      category: Category
    };
  }

  static get attributeNameMapping() {
    return {
      category: null,
      "category.name": "category_name",
      validFrom: "valid_from"
    };
  }

  category;

  constructor(values) {
    super();
    this.attributeValues = values;
  }
}

test("set undefined attributes", t => {
  const category = new Category(undefined);
  t.truthy(category);
});

test("set undefined value", t => {
  const master = new Master({ schemaVersion: undefined });
  t.is(master.schemaVersion, "3");
});

test("attribute expressions category.name", t => {
  const date = new Date();
  const category = new Category({ name: "C1" });
  const b = new MyBase({ category, valid_from: date });

  t.is(b.category, category);

  t.deepEqual(b.attributeValues, {
    category_name: "C1",
    valid_from: date
  });
});
