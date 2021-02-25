let grossSalary = 3000;
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