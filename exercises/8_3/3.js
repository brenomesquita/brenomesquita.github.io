const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
assert(mySum([1, 2, 3, 4]) === 10, "não é 10")
assert((mySum([1, -2, -3, 4]) === 10), "não é 0")

