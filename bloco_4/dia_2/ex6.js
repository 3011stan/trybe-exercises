let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;
for(let i = 0; i < numbers.length; i++){
  if((numbers[i])%2 != 0){ //se este if for satisfeito o numero visitado é impar
    contador++;
  }
}

if(contador != 0){
  console.log('Possuem '+contador+' numeros impares.');
}else{
  console.log('Não existe nenhum numero impar.');
}