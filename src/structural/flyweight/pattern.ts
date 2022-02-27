export class Icecream {
  constructor(public flavour: string, public price: number) {}
}

export default class IcecreamFactory {
  #icecreams: Icecream[] = [];

  createIcecream(flavour: string, price: number) {
    let icecream = this.getIcecream(flavour);
    if (!icecream) {
      icecream = new Icecream(flavour, price);
      this.#icecreams.push(icecream);
    }
    return icecream;
  }

  getIcecreams() {
    return this.#icecreams;
  }

  getIcecream(flavour: string) {
    return this.#icecreams.find((icecream) => icecream.flavour === flavour);
  }
}
