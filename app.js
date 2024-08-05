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
