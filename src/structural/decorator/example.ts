import { AutoPilot, Parktronic, Tesla } from "./pattern";

let tesla: Tesla = new Tesla();
tesla = new AutoPilot(tesla) as unknown as Tesla;
tesla = new Parktronic(tesla) as unknown as Tesla;

console.log(tesla.getPrice());
console.log(tesla.getDescription());
