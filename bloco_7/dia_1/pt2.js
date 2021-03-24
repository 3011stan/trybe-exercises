// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const returnFat = number => {
  let result = 1;
  for(let i = 1; i <= number; i += 1) {
    result *= i;
  }
  return result;
}

console.log(returnFat(5));