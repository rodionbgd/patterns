class Car {
  protected price: number;

  protected model: string;

  constructor() {
    this.price = 4000;
    this.model = "Car";
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

export class Tesla extends Car {
  constructor() {
    super();
    this.price = super.getPrice() * 2;
    this.model = "Tesla";
  }
}

export class AutoPilot {
  constructor(public car: Car) {}

  getPrice() {
    return this.car.getPrice() + 1000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

export class Parktronic {
  constructor(public car: Car) {}

  getPrice() {
    return this.car.getPrice() + 500;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}
