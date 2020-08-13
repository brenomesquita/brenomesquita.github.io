//const readLine = require('readline-sync');
//const imc = (p,a) =>{
//  const as = readLine.questionInt("altura")
//  console.log(p/(a*a), `e isso tbm${as}`)
//}
//console.log("hello world")
//imc(90,1.75)

const readLine = require('readline-sync');
const inquirer = require('inquirer');

const validateFloat = (input) => {
  return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
}

const validateInt = (input) => {
  return (!isNaN(parseInt(input)) && input>0 )|| 'Por favor, digite um número válido';
}

const imc = async () =>{
  const resp = await inquirer.prompt([
    { name: 'altura', type: 'input', message: 'altura', validate: validateFloat },
    { name: 'peso', type: 'input', message: 'Qual o seu peso (kg)?', validate: validateInt },
  ]);
  const a = parseFloat(resp.altura)
  const p = parseInt(resp.peso)
  const result = p/(a*a)
  console.log(result)
}
console.log("hello world")

function realizaFatoracao (x) {
  console.log('lalalal', x)
  return [0, 1].includes(x) ? 1 : x * realizaFatoracao(x - 1);
}
const fat = async () => {
  const resp = await inquirer.prompt([
    {name: "fatorial", type: "input", message: "digite um numero ineiro", validate: validateInt}
  ]);
  const x = parseInt(resp.fatorial, 10)

  rex = realizaFatoracao(x)
  console.log(rex)
}
fat()
