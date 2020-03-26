const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}


// implemente seus testes aqui
assert.deepEqual(myIndexOf([1, 2, 3, 4], 3), [-1, -1, 3, -1], "erro")
assert.deepEqual(myIndexOf([1, 2, 3, 4], 5), [-1, -1, -1, -1], "erro")
