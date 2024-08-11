let firstNumber = "";
let secondNumber = "";
let operator = "";
let firstOperatorUsed = false;
let displayValue = "";
let display = document.querySelector(".display p");
const btnContainer = document.querySelector(".button-container");

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
  if (b == 0) {
    return alert(
      "Are you dividing by zero? Or just trying to calculate your chances of winning the lottery?"
    );
  }
  return a / b;
}
function pow(a, b) {
  return a ** b;
}
function mod(a, b = null) {
  if (!(b == null)) {
    return (a / b) * 100;
  } else {
    return a / 100;
  }
}
function sqrt(b) {
  return Math.sqrt(b);
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return sub(firstNumber, secondNumber);
    case "x":
      return mul(firstNumber, secondNumber);
    case "÷":
      return div(firstNumber, secondNumber);
    case "^":
      return pow(firstNumber, secondNumber);
    case "%":
      return mod(firstNumber, secondNumber);
    case "√":
      return sqrt(secondNumber);
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
    if (data !== "=") {
      displayValue += data;
      updateDisplay(displayValue);
      return displayValue;
    }
  } else {
    if (!displayValue.includes(".")) {
      displayValue += data;
      updateDisplay(displayValue);
      return displayValue;
    } else {
      console.log(displayValue);
      let tempSecond;
      let tempArray = Array.from(displayValue);
      let TempOperatorIndex;
      tempArray.forEach((element, index) => {
        if (
          element !== "0" &&
          element !== "1" &&
          element !== "2" &&
          element !== "3" &&
          element !== "4" &&
          element !== "5" &&
          element !== "6" &&
          element !== "7" &&
          element !== "8" &&
          element !== "9" &&
          element !== "."
        ) {
          TempOperatorIndex = index;
        }
      });
      tempSecond = tempArray.slice(TempOperatorIndex + 1).toString();
      if (!tempSecond.includes(".")) {
        displayValue += data;
        updateDisplay(displayValue);
        return displayValue;
      }
    }
  }
  updateDisplay(displayValue);
}

btnContainer.addEventListener("pointerdown", (button) => {
  if (button.target.tagName !== "DIV") {
    if (button.target.innerText == "C") {
      clear();
    } else if (button.target.innerText !== "C") {
      otherButtons(button);
    }
  }
});

function otherButtons(button) {
  let value = button.target.innerText;
  if (
    value == "=" &&
    displayValue != "." &&
    displayValue != "0" &&
    operator != ""
  ) {
    calculateValue();
  } else if (
    value == "0" ||
    value == "1" ||
    value == "2" ||
    value == "3" ||
    value == "4" ||
    value == "5" ||
    value == "6" ||
    value == "7" ||
    value == "8" ||
    value == "9" ||
    value == "."
  ) {
    populateDisplay(value);
  } else if (firstOperatorUsed) {
    calculateValue();
    populateDisplay(value);
    if (value !== "=") {
      firstOperatorUsed = true;
    } else {
      firstOperatorUsed = false;
    }
  } else {
    populateDisplay(value);
    firstOperatorUsed = true;
  }
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function clear() {
  displayValue = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  firstOperatorUsed = false;
  updateDisplay(displayValue);
}
function calculateValue() {
  console.log("calculate");
  console.log(displayValue);
  let calcArray = Array.from(displayValue);
  console.log(calcArray);
  let operatorIndex;
  calcArray.forEach((element, index) => {
    if (
      element !== "0" &&
      element !== "1" &&
      element !== "2" &&
      element !== "3" &&
      element !== "4" &&
      element !== "5" &&
      element !== "6" &&
      element !== "7" &&
      element !== "8" &&
      element !== "9" &&
      element !== "."
    ) {
      operatorIndex = index;
    }
  });
  firstNumber = calcArray.slice(0, operatorIndex);
  secondNumber = calcArray.slice(operatorIndex + 1);
  operator = calcArray[operatorIndex];
  while (secondNumber[0] == "0") {
    secondNumber.shift();
  }
  firstNumber = firstNumber.join("");
  secondNumber = secondNumber.join("");
  let result = operate(operator, +firstNumber, +secondNumber);
  console.log("first - " + firstNumber);
  console.log("second - " + secondNumber);
  console.log("operator - " + operator);
  if (result % 1 !== 0 && result !== undefined) {
    result = result.toFixed(2);
  }
  if (result !== undefined) {
    displayValue = result;
  }
  console.log(result);
  console.log(displayValue);

  updateDisplay(displayValue);
}
