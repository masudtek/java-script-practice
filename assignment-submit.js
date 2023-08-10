
function cubeNumber(number) {
    let result = 0;
    if (typeof number !== "number") {
      result = "Please Enter a valid number";
      return result;
    } else {
      result = number * number * number;
      return result;
    }
  }
 
  
  function matchFinder(string1, string2) {
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
 
  
  function sortMaker(arr) {
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
  
 
  
  function canPay(changeArray, totalDue) {
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
  
 
  