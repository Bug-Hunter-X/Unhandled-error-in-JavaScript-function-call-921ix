function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

function bar(x, y) {
  try {
    return foo(x, y) * 2;
  } catch (error) {
    console.error('Error in foo function:', error.message);
    return 0; // Or handle the error appropriately
  }
}

console.log(bar(2, 3)); // Output: 10
console.log(bar('a', 3)); // Output: Error in foo function: Inputs must be numbers, 0