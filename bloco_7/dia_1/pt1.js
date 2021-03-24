const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
    console.log(elseScope);
  }
}
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens[5]}, ${oddsAndEvens[1]},${oddsAndEvens[2]},${oddsAndEvens[4]},${oddsAndEvens[3]},${oddsAndEvens[0]} se encontram ordenados de forma crescente!`);
// Seu código aqui.
