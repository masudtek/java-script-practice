// Assignment -4-
// problem -1

/* function cubeNumber(number) {
  let result = 0;
  if (typeof number !== "number") {
    result = "Please Enter a valid number";
    return result;
  } else {
    result = number * number * number;
    return result;
  }
}
const myNumber = 3;
const result = cubeNumber(myNumber);
console.log(result);

 */
// problem-2

/* function matchFinder(string1, string2) {
  let result = 0;
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    result = "Please input both parameter an array";
    return result;
  } else {
    if (string1.includes(string2)) {
      result = true;
      return result;
    } else {
      result = false;
      return result;
    }
  }
}
let myResult = matchFinder("peter parker", "Pet");
console.log(myResult);
 */

// problem-3

/* function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    let invalidOutput = "invalid input";
    return invalidOutput;
  } else if (arr[0] < arr[1]) {
    let arrReverse = arr.reverse()
    return arrReverse;
  } else if (arr[0] > arr[1]) {
    let myArray = arr;
    return myArray
  } else if (arr[0] === arr[1]) {
    let arrEqual = "equal"; 
    return arrEqual;
  }
}

const myArray = [4,5];
const myResult = sortMaker(myArray);
console.log(myResult)
 */

// problem-4

/* function findAddress(obj) {
  const key = ["street", "house", "society"];
  let result = "";
  for (let i = 0; i < key.length; i++) {
    let value = obj[key[i]];
    if(value !== undefined){
      result = result + value +"," ;
    } 
    else if (value === undefined) {
      result = result + "," + "__"+ "," ;
      continue;
    }else if(value === undefined){
      result = result + "," + "__" ;
    } 
  }
  return result;
}

const myObject = { street: 10, house: "15A", society: "Earth Perfect"};
// const myObject = { street: 10, society: "Earth Perfect" };
// const myObject = { street: 10};
// const myObject = {house: "15A", society: "Earth Perfect"};
const myResult = findAddress(myObject);
console.log("output:", myResult); */

function findAddress(obj) {
  if (typeof obj !== "object") {
    const invalidMessage = "Please provide me a valid object";
    return invalidMessage;
  } else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    const result = street + "," + house + "," + society;
    return result;
  }
}
const myObject = { street: 10, house: "15A", society: "Earth Perfect" };
console.log(findAddress(myObject));

// problem - 5

/* function canPay(changeArray, totalDue) {
  let sum = 0;
  if (changeArray.length === 0) {
    let invalidText = " Please enter a valid array of number";
    return invalidText;
  } else {
    for (let i = 0; i < changeArray.length; i++) {
      sum = sum + changeArray[i];
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}

// const myArray = [1, 3, 5];
const myArray = [];
const productPrice = 10;

const myResult = canPay(myArray, productPrice);
console.log(myResult); */
