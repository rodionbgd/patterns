import IcecreamFactory from "./pattern";

const icecreamFactory = new IcecreamFactory();

const chocoVanilla = icecreamFactory.createIcecream(
  "chocolate and vanilla",
  15
);
const vanillaChoco = icecreamFactory.createIcecream(
  "chocolate and vanilla",
  15
);
icecreamFactory.createIcecream("strawberry", 10);

const chocVan = icecreamFactory.createIcecream("chocolate and vanilla", 15);

console.log(icecreamFactory.getIcecreams());
console.log(chocoVanilla === chocVan);
console.log(vanillaChoco === chocVan);
