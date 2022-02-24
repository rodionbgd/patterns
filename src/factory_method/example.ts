import { Car, Track, VehicleFactory } from "./pattern";

const factory = new VehicleFactory();
const car = factory.createVehicle({
  vehicleType: "car",
  doors: 4,
  color: "red",
  state: "perfect",
});
const track = factory.createVehicle({
  vehicleType: "track",
  doors: 6,
  color: "green",
  state: "new",
});

console.log(car instanceof Car);
console.log(track instanceof Track);
