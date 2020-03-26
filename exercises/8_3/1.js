const assert = require('assert');
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
try{
  console.log(sum  (4, "5"))
}catch{
  console.log("erro")
}

assert(sum(3, 6) ===9, "nao é igual")
assert(sum(0, 0) ===0, "nao é zero")
assert.throws( () => { sum  (4, "5"); }, 'Error: parameters must be numbers')
