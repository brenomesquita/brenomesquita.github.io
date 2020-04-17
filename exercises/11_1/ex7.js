const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];


const getAnimal = (name) => {
  return Animals.find( ele => ele.name === name)
}

console.log(getAnimal('Dorminhoco'))