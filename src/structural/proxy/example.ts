import CryptocurrencyProxy from "./pattern";

const unauthorizedUser = new CryptocurrencyProxy("Ron", "pass");
console.log(unauthorizedUser.getValue("BTC"));

const authorizedUser = new CryptocurrencyProxy("Ron", "noR");
console.log(authorizedUser.getValue("BTC"));
