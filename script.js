const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
  {
    value: 1000,
    symbol: "M"
  },
  {
    value: 900,
    symbol: "CM"
  },
  {
    value: 500,
    symbol: "D"
  },
  {
    value: 400,
    symbol: "CD"
  },
  {
    value: 100,
    symbol: "C"
  },
  {
    value: 90,
    symbol: "XC"
  },
  {
    value: 50,
    symbol: "L"
  },
  {
    value: 40,
    symbol: "XL"
  },
  {
    value: 10,
    symbol: "X"
  },
  {
    value: 9,
    symbol: "IX"
  },
  {
    value: 5,
    symbol: "V"
  },
  {
    value: 4,
    symbol: "IV"
  },
  {
    value: 1,
    symbol: "I"
  }
]

const romanConverter = (input) => {
  let roman = "";
  for (const {value, symbol} of romanNumerals) {
    while (input >= value) {
      roman += symbol;
      input -= value;
    }
  }

  return roman;
}

convertBtn.addEventListener("click", () => {
  if (number.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (parseInt(number.value) < 0) {
    output.innerText =  "Please enter a number greater than or equal to 1";
  } else if (parseInt(number.value) >= 4000) {
    output.innerText =  "Please enter a number less than or equal to 3999";
  } else {
    output.innerText = romanConverter(parseInt(number.value));
  }
});