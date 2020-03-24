const assert = require('assert');
// escreva a função findTheNeedle para passar nos testes abaixo:
findTheNeedle = (palavras, dados) => {let z = 0
  for(let i = 0 ; i < palavras.length; i++){
    
    if(palavras[i] === dados){
      return i
    }
  }
  if(palavras !== dados){
    return -1
  }
}
//
let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
