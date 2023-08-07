function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter a number ";
  }
  return num1 + num2;
}
const result = sum(15, "45");
console.log(result);

function multiply(num1, num2) {
  return num1 * num2;
}
const multiplication = multiply(10, 15);
console.log(multiplication);
