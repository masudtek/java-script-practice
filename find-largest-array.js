//find largest number in the array
/* 
function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      const index = i;
      const element = numbers[index];
      if (element > largest) {
        largest = element;
      }
    }
    return largest;
  }
  
  const myArrayHeight = [167, 190, 120, 137, 145, 456];
  const tallest = maxInArray(myArrayHeight);
  console.log("Tallest Number of the array is : ", tallest);
   */

/* unction maxInArray(numbers) {
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const elements = numbers[index];
    if (elements > largest) {
      largest = elements;
    }
  }
  return largest;
}

const allNumbers = [250, 158, 144, 45, 260, 300, 456, 14];
const largestNumber = maxInArray(allNumbers);
console.log("Largest Number of the array : ", largestNumber); */

// Find the smallest Number of the array 


function minInArray(numbers){
    let smallest = numbers[0];
    for( let i= 0 ; i < numbers.length; i++){
        const element = numbers[i];
        if(element < smallest ){
            smallest = element
        }
    }return smallest;
}
const allNumbers = [250, 158, 144, 45, 260, 300, 456, 14];
const lowestNumber = minInArray(allNumbers);
console.log("Lowest Number of the array is : ", lowestNumber);