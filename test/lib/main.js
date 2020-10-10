"use strict";

var x = Object.create(null);
x.toString();
var s = {
  get name() {
    return 1;
  }

};

class Animal {
  constructor(name) {
    this.name = name;
  }

  move(distanceInMeters = 0) {
    console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
  }

}

class Snake extends Animal {
  constructor(name) {
    super(name);
  }

  move(distanceInMeters = 5, z = {}) {
    var s = 1;
    s.value = 3;
    console.log("Slithering...");
    super.move(distanceInMeters);
  }

}

class Horse extends Animal {
  constructor(name) {
    super(name);
  }

  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }

}

var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);