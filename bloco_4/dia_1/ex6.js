//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let peca = 'BISPO';
peca = peca.toLowerCase();

switch(peca) {
  case 'rei':
    console.log('Qualquer direção, porém uma casa de cada vez.');
    break;
  case 'rainha':
    console.log('Qualquer direção, porém não pode pular outras peças.');
    break;
  case 'bispo':
    console.log('Apenas diagonal, não pode pular peças.');
    break;
  case 'cavalo':
    console.log('Em L.');
    break;
  case 'torre':
    console.log('Vertical ou horizontal, não pula outras peças.');
    break;
  case 'peao':
    console.log('Uma para frente ou captura na diagonal.');
    break;
  default:
    console.log('Peça inválida.');
}