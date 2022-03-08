type Product = {
  title: string;
  price: number;
};

class ShoppingCart {
  products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(p: Product) {
    this.products.push(p);
  }
}

class Discount {
  private readonly priceDiscount: PriceDiscount;

  private numberDiscount: NumberDiscount;

  private readonly none: NoneDiscount;

  constructor() {
    this.priceDiscount = new PriceDiscount();
    this.numberDiscount = new NumberDiscount();
    this.none = new NoneDiscount();

    this.numberDiscount.setNext(this.priceDiscount);
    this.priceDiscount.setNext(this.none);
  }

  getPriceDiscount(products: Product[]) {
    return this.priceDiscount.exec(products);
  }

  getQuantityDiscount(products: Product[]) {
    return this.numberDiscount.exec(products);
  }
}

class NumberDiscount {
  private next: PriceDiscount;

  constructor() {
    this.next = null as unknown as PriceDiscount;
  }

  setNext(fn: PriceDiscount) {
    this.next = fn;
  }

  exec(products: Product[]) {
    const result = 0.05 * Math.floor(products.length / 3);

    return Number((result + this.next.exec(products)).toPrecision(2));
  }
}

class PriceDiscount {
  private next: NoneDiscount | PriceDiscount;

  constructor() {
    this.next = null as unknown as NoneDiscount;
  }

  setNext(fn: NoneDiscount) {
    this.next = fn;
  }

  exec(products: Product[]): number {
    let result = 0;
    let total = products
      .map((product) => product.price)
      .reduce((a, b) => a + b);
    if (total >= 500) result = 0.1;
    return Number((result + this.next.exec(products)).toPrecision(2));
  }
}

class NoneDiscount {
  exec() {
    return 0;
  }
}

export { ShoppingCart, Discount };
