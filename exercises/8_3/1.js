const assert = require('assert');
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert(sum(3, 6) ===9, "nao é igual")
assert(sum(0, 0) ===0, "nao é zero")
assert(sum(4, "5"))
