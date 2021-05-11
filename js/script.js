{
  const message = () => {
    console.log("Cześć Developerzy!");
  }

  const calculateResult = (selectedCurrency, amountPln) => {
    const rateEurElement = document.querySelector(".js-rateEur");
    const rateUsdElement = document.querySelector(".js-rateUsd");
    const rateGbpElement = document.querySelector(".js-rateGbp");
    const rateChfElement = document.querySelector(".js-rateChf");
    const rateEur = rateEurElement.value;
    const rateUsd = rateUsdElement.value;
    const rateGbp = rateGbpElement.value;
    const rateChf = rateChfElement.value;
  
    switch (selectedCurrency) {
      case "EUR":
        return amountPln / rateEur;
      case "USD":
        return amountPln / rateUsd;
      case "GBP":
        return amountPln / rateGbp;
      case "CHF":
        return amountPln / rateChf;
      default:
        console.log("Coś poszło nie tak!");
        break;
    }
  }

  const updateResult = (exchange, currencyName, exchangeElement) => {
    exchangeElement.innerText = exchange.toFixed(2) + " " + currencyName;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const selectedCurrencyElement = document.querySelector(".js-selectedCurrency");
    const amountPlnElement = document.querySelector(".js-amountPln");
    const selectedCurrency = selectedCurrencyElement.value;
    const amountPln = amountPlnElement.value;
    let exchange = calculateResult(selectedCurrency, amountPln);
    updateResult(exchange, selectedCurrency, document.querySelector(".js-exchange"));
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    const exchangeElement = document.querySelector(".js-exchange");
    formElement.addEventListener("submit", onFormSubmit);
    formElement.addEventListener("reset", () => {
      exchangeElement.innerText = "N/A";
    });
  };
  
  message();
  init();
}