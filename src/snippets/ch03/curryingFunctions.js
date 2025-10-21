// A standard multiply function
function multiply(a, b) {
  return a * b;
}

// A curried version of multiply, enabling partial application
function curriedMultiply(a) { 
  return function(b) {
    return a * b;
  };
}

// Create a specialized double function by partially applying curriedMultiply
const double = curriedMultiply(2); 
console.log(double(5)); // 10

// A higher-order function that adds logging behavior to any function
function withLogging(fn) { 
  return function(...args) {
    console.log(`Calling with args: ${args}`);
    return fn(...args);
  };
}

// Use withLogging to wrap double with logging, using the higher-order function
const loggedDouble = withLogging(double); 
loggedDouble(10); // Log "Calling with args: 10" and print 20
