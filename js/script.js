{
  function message() {
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
    
    const currencyName = "";

    switch (selectedCurrency) {
      case "EUR":
        currencyName = "EUR";
        return amountPln / rateEur;
      case "USD":
        currencyName = "USD";
        return amountPln / rateUsd;
      case "GBP":
        currencyName = "GBP";
        return amountPln / rateGbp;
      case "CHF":
        currencyName = "CHF";
        return amountPln / rateChf;
      default:
        console.log("Coś poszło nie tak!");
        currencyName = "";
        break;
    }
  }

  const updateResult = (exchange, currencyName,exchangeElement) => {
    exchangeElement.innerText = exchange.toFixed(2) + " " + currencyName;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const selectedCurrencyElement = document.querySelector(".js-selectedCurrency");
    const amountPlnElement = document.querySelector(".js-amountPln");
    const selectedCurrency = selectedCurrencyElement.value;
    const amountPln = amountPlnElement.value;
    calculateResult(selectedCurrency,amountPln);
    updateResult();
  };


  const onFormReset = () => {
    
  };
  formElement.addEventListener("reset", () => {
    exchangeElement.innerText = "N/A";
  });



  const init = () => {
    const formElement = document.querySelector(".js-form");
    const exchangeElement = document.querySelector(".js-exchange");
    formElement.addEventListener("submit", onFormSubmit);
    formElement.addEventListener("reset", onFormReset);
  };

  init();
  message();
}