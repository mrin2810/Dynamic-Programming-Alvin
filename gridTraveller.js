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

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18));
