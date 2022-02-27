import Credit from "./pattern";

const credit = new Credit("Ron");
const creditSmall = credit.applyFor(90);
const creditLarge = credit.applyFor(10000);

console.log("creditSmall", creditSmall);
console.log("creditLarge", creditLarge);
