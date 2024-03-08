const fib = (n, memoized = {}) => {
  if (memoized.hasOwnProperty(n)) {
    return memoized[n];
  }
  if (n <= 2) {
    return 1;
  }
  const ans = fib(n - 1, memoized) + fib(n - 2, memoized);
  memoized[n] = ans;
  return ans;
};

// Main implementation
// console.log(fib_2n(6));
// console.log(fib_2n(7));
// console.log(fib_2n(8));
// takes more time (A LOT) more
console.log(fib(50));
// Lets talk about the time complexity
console.log(`\nTime Complexity: O()`);

console.log;
