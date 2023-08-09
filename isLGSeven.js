// you will declare  a function  name isLGSeven(), this function will take a number as input
// your task : you need to make deference between your input value and 7, if the the deference is less than 7,
// return the difference otherwise return double of the input.

// input: 6; output : -1;
// input: -15; output : -22;
// input: 15; output : 30;

function isLGSeven(number) {
  if (typeof number !== "number") {
    console.log("Please input a number");
  } else {
    const differ = number - 7;
    if (differ < 7) {
      return differ;
    } else if (differ > 7) {
      return number * 2;
    }
  }
}
const myNumber = -15;
const myResult = isLGSeven(myNumber);
console.log(myResult);
