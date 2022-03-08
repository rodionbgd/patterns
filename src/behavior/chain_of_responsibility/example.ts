import { Discount, ShoppingCart } from "./pattern";

const cart = new ShoppingCart();
const discount = new Discount();

cart.addProduct({ title: "potato", price: 13 });
cart.addProduct({ title: "tomato", price: 450 });
cart.addProduct({ title: "melon", price: 24 });
cart.addProduct({ title: "orange", price: 45 });
cart.addProduct({ title: "salmon", price: 59 });

console.log("Discount by price", discount.getPriceDiscount(cart.products));
console.log(
  "Discount by quantity",
  discount.getQuantityDiscount(cart.products)
);
