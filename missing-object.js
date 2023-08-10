// you need to call a function name printObject() if you miss any object property replace with ("_")

function printDetails(person) {
  if (typeof person !== "object") {
    return "Please Provide me a valid object";
  } else {
    const name = person.name || "__";
    const age = person.age || "__";
    const email = person.email || "__";
    const result = name + "," + age + "," + email;
    return result;
  }
}

const obj = {
  name: "masud",
//   age: 32,
//   email: "masud08eee@gmail.com",
};

console.log(printDetails(obj));
