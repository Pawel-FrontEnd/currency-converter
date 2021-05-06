function message() {
  console.log("Cześć Developerzy!");
}

let amountPlnElement = document.querySelector(".js-amountPln");
let rateEurElement = document.querySelector(".js-rateEur");
let rateUsdElement = document.querySelector(".js-rateUsd");
let rateGbpElement = document.querySelector(".js-rateGbp");
let rateChfElement = document.querySelector(".js-rateChf");
let formElement = document.querySelector(".js-form");
let exchangeElement = document.querySelector(".js-exchange");
let selectedCurrencyElement = document.querySelector(".js-selectedCurrency");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amountPln = amountPlnElement.value;
  let rateEur = rateEurElement.value;
  let rateUsd = rateUsdElement.value;
  let rateGbp = rateGbpElement.value;
  let rateChf = rateChfElement.value;
  let selectedCurrency = selectedCurrencyElement.value;
  let exchange = 0;
  let currencyName = "";

  switch (selectedCurrency) {
    case "EUR":
      exchange = amountPln / rateEur;
      currencyName = "EUR";
      break;
    case "USD":
      exchange = amountPln / rateUsd;
      currencyName = "USD";
      break;
    case "GBP":
      exchange = amountPln / rateGbp;
      currencyName = "GBP";
      break;
    case "CHF":
      exchange = amountPln / rateChf;
      currencyName = "CHF";
      break;
    default:
      console.log("Coś poszło nie tak!");
      currencyName = "";
      break;
  }
  exchangeElement.innerText = exchange.toFixed(2) + " " + currencyName;
});
