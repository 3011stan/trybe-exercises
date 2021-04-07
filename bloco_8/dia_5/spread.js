const pessoa = {
	nome: 'Josileia',
	sobreNome: 'Almeida',
	idade: 29
}

const tryber = {
	softSkils: true,
	hardSkills: true,
	job: true,
}

const pessoaEstudante = {
	...pessoa,
	...tryber,
	matriculada: true,
}
console.log(pessoaEstudante);