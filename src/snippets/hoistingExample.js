'use strict';
function greet() {
  // This will throw a ReferenceError because 'message' is not initialized before use due to 'let' hoisting behavior
  console.log(message);
  let message = "Hello, world!";
}
greet();
