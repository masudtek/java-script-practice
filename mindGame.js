// call a function name mindGame() which will take a positive number
// you can multiply by 3 and add 10 and divided by 2than minus 5
// return the output .
// simple input & output
// input : 5
// output : 7.5

function mindGame(number) {
  /*  if (typeof number !== "number") {
    return "Please provide a number";
  } else if (number <= 0) {
    return "Please provide a positive number";
  }
  else{
    const result = (((number*3) + 10 )/2 )-5;
    return result;
  } */

  // another way by using || (or operator )
  if (typeof number !== "number" || number <= 0) {
    return " Please provided a valid number ";
  } else {
    const result = (number * 3 + 10) / 2 - 5;
    return result;
  }
}
const myNumber = 5;
const myResult = mindGame(myNumber);
console.log(myResult);
