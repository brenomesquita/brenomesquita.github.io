const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// ---------------------------------------------------------------------------------------------------------------------------------------ex-01
authorBornIn1947 = element => element.find(elemento => elemento.author.birthYear === 1947).author.name

assert.equal(authorBornIn1947(books), 'Stephen King');
// ---------------------------------------------------------------------------------------------------------------------------------------ex-02
const expected_result = 'O Senhor dos Anéis';

authorWith3DotsOnName = array => array.find( elemen => elemen.author.name.includes("J") ).name

assert.deepEqual(authorWith3DotsOnName(books), expected_result);
// ---------------------------------------------------------------------------------------------------------------------------------------ex-03
const expected_result3 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]

const filterA = element =>  (element.genre.includes( 'Ficção Científica') || element.genre.includes( 'Fantasia' ) )
fantasyOrScienceFictionAuthors = (arrayToSort) => arrayToSort.filter(filterA).map( x => x.author.name).sort()

assert.deepEqual(fantasyOrScienceFictionAuthors(books), expected_result3);
// ---------------------------------------------------------------------------------------------------------------------------------------ex-04



// ---------------------------------------------------------------------------------------------------------------------------------------ex-05
const expected_result5 = 43;

averageAge = (media) => media.reduce( ( prevVal, elem ) => {
  return prevVal + (elem.releaseYear - elem.author.birthYear );
}, 0 )/media.reduce((a, b) => {
  return a, b.id;
});

assert.equal(averageAge(books), expected_result5);


// ---------------------------------------------------------------------------------------------------------------------------------------ex-06
//const expected_result6 = {
//  author: {
//    birthYear: 1948,
//    name: 'George R. R. Martin'
//  },
//  genre: 'Fantasia',
//  id: 1,
//  name: 'As Crônicas de Gelo e Fogo',
//  releaseYear: 1991
//}


//assert.deepEqual(longestNamedBook(books), expected_result6);
// ---------------------------------------------------------------------------------------------------------------------------------------ex-07
const expected_result7 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft'
];

formatedBookNames = (dados) => dados.map( x1 => `${x1.name} - ${x1.genre} - ${x1.author.name}`)

assert.deepEqual(formatedBookNames(books), expected_result7);
// ---------------------------------------------------------------------------------------------------------------------------------------ex-08
const expected_result8 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  }
] ;

booksOrderedByReleaseYearDesc = (decrescente) => decrescente.sort((a,b) => b.releaseYear-a.releaseYear)


assert.deepEqual(booksOrderedByReleaseYearDesc(books), expected_result8);
// ---------------------------------------------------------------------------------------------------------------------------------------ex-09
//const expected_result9 = [
//  {
//    age: 31,
//    author: 'Isaac Asimov'
//  },
//  {
//    age: 38,
//    author: 'H. P. Lovecraft'
//  },
//  {
//    age: 39,
//    author: 'Stephen King'
//  },
//  {
//    age: 43,
//    author: 'George R. R. Martin'
//  },
//  {
//    age: 45,
//    author: 'Frank Herbert'
//  },
//  {
//    age: 62,
//    author: 'J. R. R. Tolkien'
//  }
//];

//nameAndAge = (nomeIdade) => {
//  let objjjj = []
//  let criado = Object.create(null)
//  criado = nomeIdade.map( elem1 =>  `${elem1.releaseYear - elem1.author.birthYear} ${elem1.author.name} ` );
//  
//  //let forea = nomeIdade.map( elem1 =>  `age: ${elem1.releaseYear - elem1.author.birthYear} + author: ${elem1.author.name} ` ).sort();
//  console.log(criado)
//  return objjjj;
//}
//console.log(nameAndAge(books))
//assert.deepEqual(nameAndAge(books), expected_result9);

// ---------------------------------------------------------------------------------------------------------------------------------------ex-10


const expected_result10 = false

everyoneWasBornOnSecXX = (result) => result.every( i => i.author.birthYear >=1901)

assert.equal(everyoneWasBornOnSecXX(books), expected_result10);

// ---------------------------------------------------------------------------------------------------------------------------------------ex-11
const expected_result11 = true

someBookWasReleaseOnThe80s = (alguns) => alguns.some(somas => somas.releaseYear>=1980 && somas.releaseYear<=1990)

assert.equal(someBookWasReleaseOnThe80s(books), expected_result11);