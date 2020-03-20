const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
assert(isAbove(2, 1) === true)
assert(isAbove(1, 2) === false)