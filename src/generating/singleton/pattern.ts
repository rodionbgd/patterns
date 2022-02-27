export default class Counter {
  count = 0;

  static instance: Counter;

  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }
    Counter.instance = this;
    return Counter.instance;
  }

  getCounter() {
    return this.count;
  }

  incCounter() {
    this.count++;
  }
}
