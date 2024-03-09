# Fibonacci

## Recursive Aprroach

Let's start with the recursive approach, which is having 2 recursive calls for n-1, and n-2 and returning this sum of the values we get in return.

```javascript
const fib = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
```

#### Time and Space complexity

We can see that we have 2 recursive calls, if we calculate the height of the recursive tree we get `N` and the number of calls on each level are twice the number of calls on the level before.

Which takes us to the follwing calculation:

Total time complexity = O(1 `*` 2 `*` 2 `*` 2 `*` 2 `N` times) = `O(2^N)`

When we come to think about space complexity, we have consider the stack space for the function calls. Even though we have 2^n function calls in this method, at any given time at most `N` stackframes will be active.

Space complexity becomes `O(N)`

## Memoization

```javascript
const fib = (n, memoized = {}) => {
  // if (n in memoized) {
  if (memoized.hasOwnProperty(n)) {
    // if memoized, return the same answer to avoid duplicate subtree creation
    return memoized[n];
  }
  if (n <= 2) {
    // base case
    return 1;
  }
  memoized[n] = fib(n - 1, memoized) + fib(n - 2, memoized);
  // when you calculate the answer store it in the memoized map.
  return memoized[n];
};
```

Now for the memoized algorithm we still have space complexity of `O(N)` but, we managed to reduce time complexity to `O(N)`

# Index

| File Name        | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| [fib.js](fib.js) | Write a function 'fib(n) that takes in a number as an argument. |
|                  | The function should return the n-th number of the Fibonacci     |
|                  | sequence.                                                       |
