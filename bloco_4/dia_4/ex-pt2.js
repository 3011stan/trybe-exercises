//Exercicio 1: Crie uma função que receba uma string e retorne true se for um palindromo, ou false, se não for.
function verificaPalindrome(palavra){
  let palavraInvertida = '';
  palavraInvertida = palavra.split('').reverse().join('');
  if(palavraInvertida === palavra){
    return true;
  }else{
    return false;
  }
}
console.log(verificaPalindrome('roma'));

//Exercicio 2:Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function retornaIndiceMaiorValor(arrayNumbers){
  let maior = arrayNumbers[0];
  for(let i = 1; i < arrayNumbers.length; i += 1){
    if(maior < arrayNumbers[i]){
      maior = arrayNumbers[i];
    }
  }
  let index = arrayNumbers.indexOf(maior);
  return index;
}
arrayNumbers = [2, 3, 6, 7, 10, 1];
console.log(retornaIndiceMaiorValor(arrayNumbers));

//Exercicio 3: Crie uma função que receba um array de inteiros e retorne o ĩndice do menor valor.
function retornaIndiceMenorValor(arrayNumbers){
  let menor = arrayNumbers[0];
  for(let i = 1; i < arrayNumbers.length; i += 1){
    if(menor > arrayNumbers[i]){
      menor = arrayNumbers[i];
    }
  }
  let index = arrayNumbers.indexOf(menor);
  return index;
}
arrayNumbers = [2, 3, 6, 7, 10, 1];
console.log(retornaIndiceMenorValor(arrayNumbers));

//Exercicio 4: Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function retornaMaiorNome(arrayNames){
  let name = arrayNames[0]; //colocando primeiro nome do array numa variavel.
  for(let i = 1; i < arrayNames.length; i += 1){
    if(name.length < arrayNames[i].length){
      name = arrayNames[i];
    }
  }
  return name;
}
let arrayNames = ['Jose', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana'];
console.log(retornaMaiorNome(arrayNames));

//Exercicio 5: Cria uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function countMaior(arrayEntrada){
  arrayEntrada.sort();

  var maior = 0;
  var maiorOcorrencia = -1;

  var count = 1;
  for ( var i = 1 ; i <= arrayEntrada.length ; i++ ) {
    if ( i < arrayEntrada.length && arrayEntrada[i] == arrayEntrada[i-count] ){
      count++;
    }else if ( count > maiorOcorrencia ) {
      maior = arrayEntrada[i-1];
      maiorOcorrencia = count;
    }
  }
  return maior;
}
var arrayEntrada = [1, 2, 3, 4, 5, 2, 2, 3];
console.log(countMaior(arrayEntrada));

//Exercicio 6 : Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function sumNumbers(number){
  let retornoNumber = 0;
  for(let i = 1; i <= number; i += 1){
    retornoNumber = retornoNumber + i;
  }
  return retornoNumber;
}
console.log(sumNumbers(5));

//Exercicio 7:
function verificaString(word, ending) {
  let inverseWord = word.split("").reverse().join("");
  let inverseEnding = ending.split("").reverse().join("");
  let tamEnding = inverseEnding.length;
  for(let i = 0; i < inverseEnding.length; i += 1){
    if(inverseWord[i] != inverseEnding[i]){
      return false;
    }else{
      return true;
    }
  }
}

console.log(verificaString('trybe', 'be'));