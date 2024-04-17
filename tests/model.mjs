import { Master, Category, Meter, Note, Value } from "@konsumation/model";

export const data = {
  categories: {
    C1: {
      description: "desc",
      meters: {
        M1: {
          fractional_digits: 4,
          validFrom: new Date(0),
          notes: {
            [new Date(0).toISOString()]: {
              description: "a note"
            }
          },
          values: [
            { date: new Date(0), value: 1.0 },
            { date: new Date(1000), value: 2.0 }
          ]
        }
      }
    },
    C2: {
      meters: { M1: { validFrom: new Date(0), values: [], notes: {} } }
    }
  }
};

export const emptyData = {
  categories: {}
};

class MyNote extends Note {
  async write(data) {
    const note = this.getAttributes();
    data.categories[this.meter.category.name].meters[this.meter.name].notes[
      this.name
    ] = note;
  }
}

class MyValue extends Value {
  async write(data) {
    data.categories[this.meter.category.name].meters[
      this.meter.name
    ].values.push(this.getAttributes());
  }
}

class MyMeter extends Meter {
  static get factories() {
    return {
      [MyNote.type]: MyNote,
      [MyValue.type]: MyValue
    };
  }

  static get attributeNameMapping() {
    return { fractionalDigits: "fractional_digits" };
  }

  async write(data) {
    const meter = this.getAttributes();
    meter.values = [];
    meter.notes = [];
    data.categories[this.category.name].meters[this.name] = meter;
  }

  async *notes(data) {
    for (const [name, note] of Object.entries(
      data.categories[this.category.name].meters[this.name].notes
    )) {
      note.name = name;
      note.meter = this;
      yield new MyNote(note);
    }
  }

  async *values(data) {
    for (const v of data.categories[this.category.name].meters[this.name]
      .values) {
      yield new MyValue({ meter: this, ...v });
    }
  }
}

class MyCategory extends Category {
  static get factories() {
    return {
      [MyMeter.type]: MyMeter
    };
  }

  async write(data) {
    const category = this.getAttributes();
    category.meters = {};
    data.categories[category.name] = category;
  }

  async *meters(data) {
    for (const [name, meter] of Object.entries(
      data.categories[this.name].meters
    )) {
      meter.name = name;
      meter.category = this;
      yield new MyMeter(meter);
    }
  }
}

class MyMaster extends Master {
  static get factories() {
    return {
      [MyCategory.type]: MyCategory
    };
  }

  constructor(data) {
    super(data);
    this.context = data;
  }

  async *categories(context) {
    for (const [name, category] of Object.entries(this.context.categories)) {
      category.name = name;
      yield new MyCategory(category);
    }
  }
}

export { MyMaster as Master };
export { MyCategory as Category };
export { MyMeter as Meter };
export { MyNote as Note };
export { MyValue as Value };
