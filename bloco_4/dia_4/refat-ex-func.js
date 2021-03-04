//adicao
function adicao(a, b) {
  return a + b;
}
console.log(adicao(10, 20));

//subtracao
function subtracao(a, b){
  return a - b;
}
console.log(subtracao(10,3));

//multiplicacao
function multiplica(a, b){
  return a * b;
}
console.log(multiplica(3,9));

//divisao
function divide(a, b){
  return a/b;
}
console.log(divide(10,2));

//modulo
function modulo(a, b){
  return a % b;
}
console.log(modulo(10, 3));

//maior de dois numeros
function returnMaior(a, b){
  if(a > b){
    return a;
  }else{
    return b;
  }
}
console.log(returnMaior(20,900));

//maior de tres
function returnMaiorTres(a, b, c){
  if(a > b && a > c){
    return a;
  }else if(b > a && b > c){
    return b;
  }else if(c > a && c > b){
    return c;
  }
}
console.log(returnMaiorTres(10,20,30));

//verifica positivo ou negativo
function verificaPosNeg(a){
  if(a > 0){
    return 'positivo';
  }else if(a < 0){
    return 'negativo';
  }else{
    return 'zero';
  }
}
console.log(verificaPosNeg(10));

//verifica triangulo
function verificaTriangulo(a, b, c){
  if(a < 0 || b < 0 || c < 0) {
    return 'Algum angulo foi digitado incorretamente.';
  }
  let soma = a + b + c;
  if(soma === 180){
    return 'forma um triangulo.';
  }else{
    return 'nao forma um triangulo.';
  }
}
console.log(verificaTriangulo(10,20,150));

//verifica movimento da peça de xadrez
function verificaPecaXadrez(peca){
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
}
verificaPecaXadrez('peao');

//pega nota em porcentagem e mostra se é de A a F
function exibeNota(nota){
  if(nota >= 90 && nota <= 100){
    console.log('A');
  }else if(nota >= 80 && nota < 90){
    console.log('B');
  }else if(nota >= 70 && nota < 80){
    console.log('C');
  }else if(nota >= 60 && nota < 70){
    console.log('D');
  }else if(nota >= 50 && nota < 60){
    console.log('E');
  }else if(nota < 50  && nota >= 0){
    console.log('F');
  }else{
    console.log('Algo de errado não está certo.')
  }
}
console.log(exibeNota(10));

//retorne true se um dos tres numeros for par
function returnPar(a, b, c){
  if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    return true;
  }else{
    return false;
  }
}
console.log(returnPar(3,90123091239102390123124,3));

//lucro da empresa
function mostraLucro(valorCusto, valorVenda){
  let valorCustoTotal = valorCusto + (20/100)*valorCusto;
  let lucro = valorVenda - valorCustoTotal;
  lucro = lucro*1000;
  if(valorCusto < 0 || valorVenda < 0){
    console.log('Valor inválido inserido.');
    return null;
  }else {
    console.log('O lucro da empresa é de R$'+lucro);
  }
}
mostraLucro(10, 20);

//salario liquido
function netSalaryShow(grossSalary){
  let netSalary, inss, ir, salaryDescontInss;
  //definindo e descontando inss.
  if(grossSalary <= 1556.94){
    inss = grossSalary*(8/100);
    salaryDescontInss = grossSalary - inss;
  }
  else if(grossSalary >=1556.95 && grossSalary <= 2594.92) {
    inss = grossSalary*(9/100);
    salaryDescontInss = grossSalary - inss;
  }
  else if(grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    inss = grossSalary*(11/100);
    salaryDescontInss = grossSalary - inss;
  }
  else if(grossSalary > 5189.82){
    inss = 570.88; //lembrar que aqui não está em porcentagem.
    salaryDescontInss = grossSalary - inss;
  }else{
    console.log('Salario invalido(1).');
  }

  //definindo e descontando IR
  if(salaryDescontInss <= 1903.98){
    ir = 0;
    netSalary = salaryDescontInss - ir;
  }
  else if(salaryDescontInss >= 1903.99 && salaryDescontInss <= 2826.65){
    ir = ((7.5)/100)*salaryDescontInss - 142.80;
    netSalary = salaryDescontInss - ir;
  }
  else if(salaryDescontInss >= 2826.66 && salaryDescontInss <= 3751.05){
    ir = (15/100)*salaryDescontInss - 354.80;
    netSalary = salaryDescontInss - ir;
  }
  else if(salaryDescontInss >= 3751.06 && salaryDescontInss <= 4664.68){
    ir = ((22.5)/100)*salaryDescontInss - 636.13;
    netSalary = salaryDescontInss - ir;
  }
  else if(salaryDescontInss > 4664.68){
    ir = ((27.5)/100)*salaryDescontInss - 869.36;
    netSalary = salaryDescontInss - ir;
  }

  console.log('O salário liquido é de R$'+netSalary);
}

netSalaryShow(3000);