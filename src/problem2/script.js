const currencyData = [
    {
      "currency": "BLUR",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.208115254237288
    },
    {
      "currency": "bNEO",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 7.1282679
    },
    {
      "currency": "BUSD",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.999878261118644
    },
    {
      "currency": "USD",
      "date": "2023-08-29T07:10:30.000Z",
      "price": 1
    },
    {
      "currency": "ETH",
      "date": "2023-08-29T07:10:52.000Z",
      "price": 1645.93373737374
    },
    {
      "currency": "GMX",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 36.3451143728814
    },
    {
      "currency": "STEVMOS",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.0727670677966102
    },
    {
      "currency": "LUNA",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.409556389830508
    },
    {
      "currency": "RATOM",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 10.2509189152542
    },
    {
      "currency": "STRD",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.738655338983051
    },
    {
      "currency": "EVMOS",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.062461813559322
    },
    {
      "currency": "IBCX",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 41.268113559322
    },
    {
      "currency": "IRIS",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.0177095593220339
    },
    {
      "currency": "ampLUNA",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.495485898305085
    },
    {
      "currency": "KUJI",
      "date": "2023-08-29T07:10:45.000Z",
      "price": 0.675
    },
    {
      "currency": "STOSMO",
      "date": "2023-08-29T07:10:45.000Z",
      "price": 0.431318
    },
    {
      "currency": "USDC",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.989832
    },
    {
      "currency": "axlUSDC",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.989832
    },
    {
      "currency": "ATOM",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 7.18665733333333
    },
    {
      "currency": "STATOM",
      "date": "2023-08-29T07:10:45.000Z",
      "price": 8.51216205084746
    },
    {
      "currency": "OSMO",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 0.377297433333333
    },
    {
      "currency": "rSWTH",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.00408771
    },
    {
      "currency": "STLUNA",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.442322101694915
    },
    {
      "currency": "LSI",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 67.6966152542373
    },
    {
      "currency": "OKB",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 42.9756205932203
    },
    {
      "currency": "OKT",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 13.5615779661017
    },
    {
      "currency": "SWTH",
      "date": "2023-08-29T07:10:45.000Z",
      "price": 0.00403985045501208
    },
    {
      "currency": "USC",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.994
    },
    {
      "currency": "USDC",
      "date": "2023-08-29T07:10:30.000Z",
      "price": 1
    },
    {
      "currency": "USDC",
      "date": "2023-08-29T07:10:30.000Z",
      "price": 1
    },
    {
      "currency": "USDC",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 0.999878261118644
    },
    {
      "currency": "WBTC",
      "date": "2023-08-29T07:10:52.000Z",
      "price": 26002.822020202
    },
    {
      "currency": "wstETH",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 1872.25797423729
    },
    {
      "currency": "YieldUSD",
      "date": "2023-08-29T07:10:40.000Z",
      "price": 1.02908479661017
    },
    {
      "currency": "ZIL",
      "date": "2023-08-29T07:10:50.000Z",
      "price": 0.0165181355932203
    }
];

// Get the select boxes
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");

// Populate the select boxes with currency options
currencyData.forEach(currency => {
    const option = document.createElement("option");
    option.value = currency.currency;
    option.text = currency.currency;
    
    fromCurrencySelect.appendChild(option);
    toCurrencySelect.appendChild(option.cloneNode(true));
});

// Get the input elements
const resultInput = document.getElementById("result");
const amountInput = document.getElementById("amount");

// Define the conversion rates based on currency data
const conversionRates = {};
currencyData.forEach(currency => {
    conversionRates[currency.currency] = currency.price;
});

// Function to "Result" input when the "Amount" input changes
function calculateResult() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (isNaN(amount)) {
        resultInput.value = "Please enter a valid amount.";
    } else if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
        resultInput.value = "Invalid currency selection.";
    } else {
        const result = (amount * conversionRates[toCurrency] / conversionRates[fromCurrency]).toFixed(2);
        resultInput.value = result; // Only update with the result
    }
}

// Function to update the "Amount" input when the "Result" input changes
function updateAmountFromResult() {
    const result = parseFloat(resultInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (!isNaN(result) && !isNaN(conversionRates[fromCurrency]) && !isNaN(conversionRates[toCurrency])) {
        const amount = (result * conversionRates[fromCurrency] / conversionRates[toCurrency]).toFixed(2);
        amountInput.value = amount;
    }
}
// Trigger initial calculation when the page loads
calculateResult();
// Add event listeners to input fields and select boxes
amountInput.addEventListener("input", calculateResult);
fromCurrencySelect.addEventListener("change", calculateResult);
toCurrencySelect.addEventListener("change", updateAmountFromResult);
resultInput.addEventListener("input", updateAmountFromResult);