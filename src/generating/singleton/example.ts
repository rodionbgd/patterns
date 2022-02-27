import Counter from "./pattern";

const counterA = new Counter();
const counterB = new Counter();

console.log(counterA === counterB);
counterA.incCounter();
console.log(counterB.getCounter());
