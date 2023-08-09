//
//Wrong approach
/*
function findBadData(number){
    const badData =[];
    if(!Array.isArray(number)){
        return  "please provide an array"
    }else{

    for ( let i = 0; i<number.length; i++ ){
            if(number[i] < 0){
                badData.push(number[i]);
            }
            // else{
            //     console.log("Good data")
            // }
        }
    }
    return badData;

}

const myNumbers = [10, 12, 25, -20, -35, 45, -65, -99, 444, -55, -95, -99];
const myResult = findBadData(myNumbers);
console.log(myResult) */

//right way 

function findingBadData(arr) {
  if (!Array.isArray(arr)) {
    return "Please provide me an array of number ";
  } else {
    let badData = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return "Please provide me an array of number ";
      } else {
        if (arr[i] < 0) {
          badData++;
        }
      }
    }
    return badData;
  }
}
const myArray = [1, 2, 3, -9];
const result = findingBadData(myArray);
console.log(result);
