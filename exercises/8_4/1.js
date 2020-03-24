const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:
addOne = (arrayOriginal) => {
  let arrayCopia =[]
  for (let i = 0; i < arrayOriginal.length; i++){
    arrayCopia.push(arrayOriginal[i]+1)
  }
  return arrayCopia
}
//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
