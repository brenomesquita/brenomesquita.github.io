const assert = require('assert')

getChange = (payable, paid) =>{
  const moedasArray = [200, 100, 50, 20, 10, 2, 1];
  let moedasRetorno = [];
  const { obj } = moedasArray;
  let troco = payable - paid;

}



//
//let result = getChange(1, 1); // no change/coins just an empty array
//let expected = [];
//assert.deepEqual(result, expected);
//
//result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
//expected = [50, 20, 10, 5];
//assert.deepEqual(result, expected);
//
//result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
//expected = [100, 10, 2, 2];
//assert.deepEqual(result, expected);
//
//result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
//expected = [200, 100, 50, 20, 10, 5, 2, 1];
//assert.deepEqual(result, expected);

assert.throws(() => { getChange(5, 10); }, /^Error: paid value is not enough$/);