//Exercícios de objetos e for/in
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercício 1
console.log('Bem-vinda ' + info.personagem + '\n');

//Exercício 2
info['recorrente'] = 'Sim';
console.log(info);
console.log('\n');

//Exercício 3
for(let key in info){
  console.log(key);
}
console.log('\n');

//Exercicio 4
for(let key in info){
  console.log(info[key]);
}
console.log('\n');

//Exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics#178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};
function showInfos(infoA, infoB){
  console.log(info.personagem + ' e ' + info2.personagem);
  console.log(info.origem + ' e ' + info2.origem);
  console.log(info.nota + ' e ' + info2.nota);
  if(info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
    console.log('Ambos recorrentes.');
  }else{
    console.log('Algum não é recorrente');
  }
}
showInfos(info, info2);
