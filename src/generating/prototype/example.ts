import Car from "./pattern";

const prototypeCar = new Car("vx3", "green", 5000);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();

console.log(
  "car1.color === prototypeCar.color",
  car1.color === prototypeCar.color
);
car1.color = "blue";
console.log("car1.color", car1.color);

console.log(
  "car2.model === prototypeCar.model",
  car2.model === prototypeCar.model
);
car1.model = "fx4";
console.log("car2.model", car2.model);
