const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  if (number.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (parseInt(number.value) < 0) {
    output.innerText =  "Please enter a number greater than or equal to 1";
  } else if (parseInt(number.value) > 4000) {
    output.innerText =  "Please enter a number less than or equal to 3999";
  }
})