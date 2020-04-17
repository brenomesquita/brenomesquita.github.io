const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise ((resolve, reject) => {
    const animais = Animals.find( ele => ele.name === name);
    if (animais) resolve(animais)
    return reject('Nenhum animal com esse nome!')
  })
  // Adicione o código aqui.Animals.find( ele => ele.name === name)
)

const findAnimalByage = (age) => (
  new Promise ((resolve, reject) => {
    const animais = Animals.find( ele => ele.age === age);
    if (animais) resolve(animais)
    return reject('Nenhum animal com essa idade!')
  })
  // Adicione o código aqui.Animals.find( ele => ele.name === name)
)

const getAnimal = (name) => findAnimalByName(name).then(e => e)

const getAnimalByAge = (age) => findAnimalByage(age).then(e => e)
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('idade testes', () =>{
  it('quando da certo', async () =>{
    expect.assertions(1);
    await expect(getAnimalByAge(5)).resolves.toEqual({ name: 'Preguiça', age: 5, type: 'Cat' })
  })
  it('quando da errado', async () => {
    expect.assertions(1)
    expect(getAnimalByAge(8)).rejects.toBe('Nenhum animal com essa idade!')
  })
});
    
