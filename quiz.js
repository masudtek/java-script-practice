/* function inchToFeet(inch){
     var feet = inch/12;
        return feet; 
}
const result = inchToFeet(120);
console.log(result); */

/* let array = ["cat", "dog", "cow", "duck", "bear"];
console.log(array.slice(2,4));
console.log(array);
console.log(array.splice(2, 2, "hoarse", "chicken"));
console.log(array); */

var myObject = {
  name: "Zayaan",
  age: 3,
  address: "Chittagong",
  phoneNumber: 21212121,
};
// console.log(Object.keys(myObject));
// console.log(Object.values(myObject));
/* for(let key of Object.keys(myObject)){
    console.log(myObject[key])

} */

for (let i in myObject) {
  // console.log(myObject[i])
}

let array = ["cat", "dog", "cow", "duck", "bear"];
let myString = "my name is md masud kaisar khan ";
//  console.log(myString.substring(2,5));
//  console.log(myString.split(" "));
//  console.log(myString.split(""));
const line = ["my", "name", "is", "md", "masud", "kaisar", "khan", ""];
const newLine = line.join("_");
//   console.log(newLine)

const result = Math.pow(3, 8);
//   console.log(result);

/*   const tallest = [167, 197, 125, 137 ];
  console.log(tallest);
  console.log(Math.max(tallest)); */

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
