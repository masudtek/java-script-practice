// sum the array element

// const myArray = [23, 26, 30, 29, 35, 79, 85];
/* let sum = 0 ; 
function getSum(numbers){
    for(let i =0; i< numbers.length; i++){
        let element = numbers[i];
        sum = sum + element; 
    }
    console.log("sum: " , sum)
    return sum; 

}
getSum(myArray) */

/* function getOdd(numbers){
    let remainders = numbers % 2;
    if(remainders === 1){
        console.log("odd: " , numbers)
    }else{
        console.log("even ")        
    }
}
getOdd(myArray) */

let myNumbers = [20, 21, 23, 25, 26, 30, 45, 80, 79];
function getOdd(numbers) {
  let evenNumbers = [];
  let oddNumbers = [];
  let sumOfEven = 0;
  let sumOfOdd = 0;
  for (let i = 0; i < numbers.length; i++) {
    var elements = numbers[i];
    let remainder = elements % 2;
    if (remainder === 0) {
      evenNumbers.push(elements);
    } else {
      oddNumbers.push(elements);
    }
  }
  console.log("even Number : ", evenNumbers);
  console.log("Odd Number :", oddNumbers);

  for (let i = 0; i < evenNumbers.length; i++) {
    sumOfEven = sumOfEven + evenNumbers[i];
  }
  console.log("sum of even number :", sumOfEven);
  for (let i = 0; i < oddNumbers.length; i++) {
    sumOfOdd = sumOfOdd + oddNumbers[i];
  }
  console.log("sum of odd number :", sumOfOdd);
  return myNumbers;
} 
getOdd(myNumbers);
