class Bank {
  verify(amount: number) {
    return amount < 1000;
  }
}

class CreditHistory {
  check(name: string) {
    return name.indexOf("debt") === -1;
  }
}

class Balance {
  check(name: string) {
    return name.indexOf("zero balance") === -1;
  }
}

export default class Credit {
  constructor(public name: string) {}

  applyFor(amount: number) {
    const isApproved = new Bank().verify(amount);
    const bankResult = isApproved ? "approved" : "denied";
    const isPositiveBalance = new Balance().check(this.name);
    const balance = isPositiveBalance ? "positive balance" : "negative balance";
    const isGoodCreditHistory = new CreditHistory().check(this.name);
    const creditHistory = isGoodCreditHistory ? "good" : "poor";
    return `${this.name} has been ${bankResult} for the 
    ${amount} credit. 
    With a ${creditHistory} credit standing and having a ${balance}`;
  }
}
