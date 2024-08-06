let firstNumber;
let secondNumber;
let operator;
let displayValue = "";
let display = document.querySelector(".display p");
const btnList = Array.from(
  document.querySelectorAll(".button-container button")
);

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return sub(firstNumber, secondNumber);
    case "*":
      return mul(firstNumber, secondNumber);
    case "/":
      return div(firstNumber, secondNumber);
    default:
      return alert("Error in Operation");
  }
}
function updateDisplay(data) {
  if (displayValue == "0") {
    displayValue = "";
  }
  display.innerText = data;
}

function populateDisplay(data) {
  if (data !== ".") {
    displayValue += data;
    updateDisplay(displayValue);
    return displayValue;
  } else {
    if (!displayValue.includes(".")) {
      displayValue += data;
      updateDisplay(displayValue);
      return displayValue;
    }
  }
}

btnList.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText !== "C") {
      let value = button.innerText;
      populateDisplay(value);
      console.log(value);
    } else {
      displayValue = "0";
      updateDisplay(displayValue);
    }
  });
});
