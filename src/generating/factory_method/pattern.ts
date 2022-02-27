export type Vehicle = {
  doors: number;
  state: string;
  color: string;
  vehicleType?: string;
};

export class Car {
  private doors: number;

  private state: string;

  private color: string;

  constructor(options: Vehicle) {
    this.doors = options.doors;
    this.state = options.state || "brand new";
    this.color = options.color || "white";
  }
}

export class Track {
  private doors: number;

  private state: string;

  private color: string;

  constructor(options: Vehicle) {
    this.doors = options.doors;
    this.state = options.state || "used";
    this.color = options.color || "black";
  }
}

export class VehicleFactory {
  createVehicle(options: Vehicle) {
    if (options.vehicleType === "car") {
      return new Car(options);
    }
    if (options.vehicleType === "track") {
      return new Track(options);
    }
    return null;
  }
}
