export default class Car {
  constructor(
    public model: string,
    public color: string,
    public price: number
  ) {}

  produce() {
    return new Car(this.model, this.color, this.price);
  }
}
