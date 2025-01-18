function foo(a, b) {
  return a + b;
}

function bar(x, y) {
  return foo(x, y) * 2;
}

console.log(bar(2, 3)); // Output: 10

// The bug is that the bar function is not handling potential errors from foo function.
// If foo throws an error, bar won't catch it and the program might crash.
// A try...catch block should be used to handle potential errors from foo.