const assert = require('assert')
const greetPeople = (people) => {
  let array = []
  for (const person in people) {
    array.push(`Hello ${people[person]}`)
  }
  return array;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
/*
  Use a variável parameter como parâmetro da função acima, escreva testes para verificar
  se a mesma está retornando a como se vê na variável result e, caso não esteja, altere
  o código para que ele passe nos testes. Lembre-se: testes pequenos e numerosos! Escreva
  um por vez e vá corrigindo a função aos poucos:
*/
const func = greetPeople(parameter)
assert.deepEqual(func, result)
