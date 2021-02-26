/** 1 - Para o primeiro exericico de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. */
const n = 0;
let ast = '';
if(n === 0) {
  console.log('Erro.');
}
for(let i = 0; i < n; i += 1){
  ast = ast+'*';
}
for(let j = 0; j < n; j += 1){
  console.log(ast);
}
