const canSum = (target, arr, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }
  if (target === 0) {
    return true;
  }
  if (target < 0) {
    return false;
  }
  for (let num of arr) {
    const remainder = target - num;
    if (canSum(remainder, arr, memo) === true) {
      memo[target] = true;
      return memo[target];
    }
  }
  memo[target] = false;
  return memo[target];
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
