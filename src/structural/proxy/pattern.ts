class CryptocurrencyAPI {
  getValue(coin: string) {
    switch (coin) {
      case "BTC":
        return "$1000";
      case "ETH":
        return "$500";
      case "BNB":
        return "$25";
    }
  }
}

export default class CryptocurrencyProxy {
  private api: CryptocurrencyAPI;

  constructor(private name: string, private password: string) {
    this.api = new CryptocurrencyAPI();
  }

  getValue(coin: string) {
    if (!this.authorize()) {
      return "Permission denied";
    }
    return this.api.getValue(coin);
  }

  authorize() {
    return this.name === this.password.split("").reverse().join("");
  }
}
