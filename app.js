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
let firstNumber;
let secondNumber;
let operator;

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      sub(firstNumber, secondNumber);
      break;
    case "*":
      mul(firstNumber, secondNumber);
      break;
    case "/":
      div(firstNumber, secondNumber);
      break;
    default:
      alert("Error in Operation");
      break;
  }
}
