const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
wordLengths = (palavras) => {
  let copia = []
  for (let i = 0 ; i < palavras.length ; i++){
    copia.push(palavras[i].length)
  }
  return copia
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
