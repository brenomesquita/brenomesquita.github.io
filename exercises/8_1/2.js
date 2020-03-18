let longestWord = (palavra) => {
  let array = palavra.split(" ")
  return array.sort((a,b) => b.length - a.length)[0]
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))
