let counter = 0;

// Impure: Mutate counter (external state); output changes across calls
function increment() {
  counter++;
  return counter;
}

// Pure: Depend only on inputs (x, y) and always produces the same output
function add(x, y) {
  return x + y;
}
