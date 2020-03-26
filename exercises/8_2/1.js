const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

console.log("____________________________________________________________________ex1")
let turno = 'turno'
let varManha= 'manhã'
adicionarManha = (manha, turno, varManha) =>{
  manha[turno] = varManha
  console.log(manha)
}
adicionarManha(lesson2,  turno, varManha)


console.log("____________________________________________________________________ex2")
listarKeys = (keys) =>{
  console.log(Object.keys(keys))
}
listarKeys(lesson1)

console.log("____________________________________________________________________ex3")
tamanhoObj = (tamanho) =>{
  let i = Object.keys(tamanho).length
  console.log(i)
}
tamanhoObj(lesson1)


console.log("____________________________________________________________________ex4")
objetoVal = (val) => {
  let z = Object.values(val)
  console.log(z)
}
objetoVal(lesson1)
objetoVal(lesson2)
objetoVal(lesson3)


console.log("____________________________________________________________________ex5")
let allLessions= Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessions)

console.log("____________________________________________________________________ex6")

console.log("____________________________________________________________________ex7")
getValueByNumber = (param, i) =>  {
  let o = Object.values(param)[i]
  return o
}
console.log(getValueByNumber(lesson1, 0));


console.log("____________________________________________________________________ex8")
verifyPair = (lessions, key, value) =>{
  let obj = Object.entries(lessions);
  obj[3][0] == (lessions[value]=key) && obj[3][1] == (lessions[key]=value) ? console.log(true) : console.log(false)
}
verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson3, 'materia', 'Maria Clara')
