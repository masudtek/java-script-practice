//  write a function which will take a string
// if the file extention is index.js than will return true otherwise false

function isJavaScriptFile(fileName) {
  if (typeof fileName !== "string") {
    return "Please provide me a valid file name ";
  } else {
    if (fileName.toLowerCase().endsWith(".js") === true) {
      return true;
    } else {
      return false;
    }
  }
}
const result = isJavaScriptFile("index.JS");
console.log(result);
