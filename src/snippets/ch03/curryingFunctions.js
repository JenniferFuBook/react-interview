function multiply(a, b) {
  return a * b;
}
function curriedMultiply(a) { 
  return function(b) {
    return a * b;
  };
}
const double = curriedMultiply(2); 
console.log(double(5)); // 10
function withLogging(fn) { 
  return function(...args) {
    console.log(`Calling with args: ${args}`);
    return fn(...args);
  };
}
const loggedDouble = withLogging(double); 
loggedDouble(10); // 20
