const assert = require('assert')
let fat = (n) => { 
  let resp = 1;
  for( let i = 1 ; i <= n ; i++ ){
     resp = resp*i
  };
  return resp
}
const fatorial = (n) => (n===0) ? 1 : n * fatorial(n - 1)
assert.deepEqual(fatorial(5), 120)
assert.deepEqual(fatorial(1), 1)
assert.deepEqual(fatorial(0), 1)