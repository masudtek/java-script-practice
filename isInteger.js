// write a function name isInteger() , it will take number and will give output boolean lite true or false
// if integer it will give me true
//  otherwise output false

function isInteger(x) {
  if (typeof x !== "number") {
    return " Please provide a number";
  } else {
    if (x % 1 === 0) {
      return true;
    } else {
      return false;
    }
  }
}
const result = isInteger(11);
console.log(result);
