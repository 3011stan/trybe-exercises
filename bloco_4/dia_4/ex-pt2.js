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