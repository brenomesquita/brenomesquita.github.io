const assert = require('assert')

// escreva sum abaixo
sum = (...arr) => {
  let soma = 0;
  for (let i of arr){
    soma += i
  }
  return soma
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
    
