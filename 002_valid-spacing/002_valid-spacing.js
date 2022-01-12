function validSpacing(text) {
  return !text.match(/(^\s|\s\s|\s$)/);
}

console.log("Must be true:");
console.log(validSpacing("Helloworld")); // True
console.log(validSpacing("Hello world")); // True
console.log(validSpacing("Hello")); // True
console.log(validSpacing("")); // True
console.log("Must be false:");
console.log(validSpacing(" Hello world")); // False
console.log(validSpacing("Hello world  ")); // False
console.log(validSpacing("Hello  world")); // False
console.log(validSpacing("Helloworld ")); // False
console.log(validSpacing(" ")); // False
