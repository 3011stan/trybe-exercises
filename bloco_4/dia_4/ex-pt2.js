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