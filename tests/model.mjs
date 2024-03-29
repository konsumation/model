import { Master, Category, Meter, Note } from "@konsumation/model";

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
          values: [{ date: new Date(0), value: 1.0 }]
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
    const note = this.attributeValues;
    console.log("NOTE WRITE", note);
    data.categories[this.meter.category.name].meters[this.meter.name].notes[this.name] = note;
  }
}

class MyMeter extends Meter {
  static get attributeNameMapping() {
    return { fractionalDigits: "fractional_digits" };
  }

  async write(data) {
    const meter = this.attributeValues;
    meter.values = [];
    meter.notes = [];
   // console.log("METER WRITE", meter);
    data.categories[this.category.name].meters[this.name] = meter;
  }

  async writeValue(data, date, value) {
   // console.log("VALUE WRITE", date, value);
    data.categories[this.category.name].meters[this.name].values.push({
      date,
      value
    });
  }

  async *notes(data) {
    //console.log(this.name, this.category.name, data.categories[this.category.name].meters);
    for (const [name, note] of Object.entries(
      data.categories[this.category.name].meters[this.name].notes
    )) {
      note.name = name;
      note.meter = this;
      yield new MyNote(note);
    }
  }
}

class MyCategory extends Category {
  async write(data) {
    const category = this.attributeValues;
    category.meters = {};
    //console.log("CATEGORY WRITE", category);
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

  async fromText(input) {
    return super.fromText(input, [MyCategory, MyMeter, MyNote]);
  }
}

export { MyMaster as Master };
export { MyCategory as Category };
export { MyMeter as Meter };
export { MyNote as Note };
