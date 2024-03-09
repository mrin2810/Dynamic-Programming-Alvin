const fib = (n, memoized = {}) => {
  // if (n in memoized) {
  if (memoized.hasOwnProperty(n)) {
    return memoized[n];
  }
  if (n <= 2) {
    return 1;
  }
  memoized[n] = fib(n - 1, memoized) + fib(n - 2, memoized);
  return memoized[n];
};

// Main implementation
// console.log(fib_2n(6));
// console.log(fib_2n(7));
// console.log(fib_2n(8));
// takes more time (A LOT) more
console.log(fib(50));
// Lets talk about the time complexity
console.log(`\nTime Complexity: O()`);
