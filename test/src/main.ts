type ctx = {};

const x = Object.create(null);

x.toString();

var s = {
  get name() {
    return 1;
  },
};

declare const my: string;

class Animal {
  constructor(public name: string) {}
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  declare foot: string;

  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5, z: ctx = {}) {
    var s: any = 1;
    (s as { value: any }).value = 3;
    console.log("Slithering...");
    super.move(distanceInMeters);
  }

  up = () => {
    console.log(this);
  };
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
