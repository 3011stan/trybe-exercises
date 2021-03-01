/**
 * n = 5
      *
     **
    ***
   ****
  *****

 */

const n = 5;
let symbol = '*';
let inputLine = ''; //a linha que será impressa
let inputPosition = n; //posição que o asterísco deverá começar a ser inserido

for(let lineIndex = 1; lineIndex <= n; lineIndex += 1){
  for(let columnIndex = 1; columnIndex <= n; columnIndex++){
    if(columnIndex < inputPosition){
      inputLine = inputLine + ' ';
    }else{
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition = inputPosition - 1;
}