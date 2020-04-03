const requirecalc = require('../8_3/1');
const requireEX2 = require('../8_3/2');
const requireEX3 = require('../8_3/3');
const requireEX4 = require('../8_3/4');
const requireEX5 = require('../8_3/5');
const requireEX6 = require('../8_3/6');
//const requireEX7 = require('../8_3/7');
const requireEX8 = require('../8_3/8');
const requireEX9 = require('../8_3/9');
//const requireEX10 = require('../8_3/10');
const requireEX11 = require('../8_3/11');

test('teaste1.js', () => {
  expect(requirecalc(3, 6)).toEqual(9)
  expect(requirecalc(0, 0)).toEqual(0)
  expect(()=>(requirecalc(4, "5")).toThrow('Argument must be a number'))
})

test('testeex2.js', () => {
  expect(requireEX2([1, 2, 3, 4], 3)).toEqual([-1, -1, 3, -1])
  expect(requireEX2([1, 2, 3, 4], 5)).toEqual([-1, -1, -1, -1])
})

describe('teste3', () => {
  it('ex3', () => {
    expect(requireEX3([1, 2, 3, 4])).toEqual(10)
    expect(requireEX3([1, -2, -3, 4])).toEqual(0)
  });
});

describe('describe', () => {
  it('ex4', () => {
    expect(requireEX4([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ])
    expect(requireEX4([1, 2, 3, 4], 3)).not.toEqual([ 1, 2, 3, 4 ])
    expect(requireEX4([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ])
  });
});

describe('describe ex5', () => {
  it('ex5', () => {
    expect(requireEX5([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ])
    expect(requireEX5([1, 2, 3, 4], 3)).not.toEqual([ 1, 2, 3, 4 ])
    expect(requireEX5([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ])
    expect(requireEX5([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ])
  })
})

describe('ex6', () => {
  it('ex6', () => {
    expect(requireEX6(15)).toEqual('fizzbuzz')
    expect(requireEX6(3)).toEqual('fizz')
    expect(requireEX6(5)).toEqual('buzz')
    expect(requireEX6(7)).toEqual(7)
    expect(requireEX6('7')).toBeFalsy()
  })
})

//describe( 'ex7', () => {
//  it('ex7', () =>{
//    expect(requireEX6()).not.toBeUndefined()
//  })
//})

describe('ex8', () => {
  it('ex8', () => {
    expect(requireEX8('oi')).not.toEqual('oi')
  })
})

describe('ex9', () => {
  it('ex9', () => {
    expect(requireEX9('obj1')).not.toEqual('obj2')
  })
})

describe('ex11', () => {
  it('ex11', () => {
    expect(requireEX11(2,1)).toBeTruthy()
    expect(requireEX11(1, 2)).not.toBeTruthy()
  })
})
