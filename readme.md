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

# gridTraveller

Problem Statement: Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
In how many ways can you travel to the goal on a grid with dimensions m \* n?

## Recursive Approach

```javascript
const gridTraveller = (m, n) => {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (m === 1 && n === 1) {
    return 1;
  }
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};
```

Time Complexity: `O(2^m+n)`
Space Complexity: `O(N + M)`

## Memoization

While memoizing the gridTraveller problem, we can consider (2, 1) to be same as (1, 2)
Let's do it!

```javascript
const gridTraveller = (m, n, memo = {}) => {
  let id = m + "," + n;
  if (id in memo) {
    return memo[id];
  }
  if (m === 0 || n === 0) {
    return 0;
  }
  if (m === 1 && n === 1) {
    return 1;
  }
  memo[id] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[id];
};
```

Time Complexity: `O(N * M)`
Space Complexity: `O(N + M)`

# Index

| File Name        | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| [fib.js](fib.js) | Write a function 'fib(n) that takes in a number as an argument. |
|                  | The function should return the n-th number of the Fibonacci     |
|                  | sequence.                                                       |
| [fib.js](fib.js) | Write a function 'fib(n) that takes in a number as an argument. |
|                  | The function should return the n-th number of the Fibonacci     |
|                  | sequence.                                                       |
