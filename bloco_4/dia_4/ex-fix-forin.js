/** For/In em objetos */
let pizzas = {
	sabor: 'Palmito',
	preco : 39.90,
	bordaCatupiry: true
};

for(let key in pizzas) { //enquando houver key no objeto pizzas execute o bloco abaixo.
	console.log(pizzas[key]);
}

/** For/in em arrays */
let pizzasDoces = [ 'chocolate', 'banana', 'morango'];

for(let key in pizzasDoces) {
	console.log(key); //mostra os indices
	console.log(pizzasDoces[key]); //mostra o valor de cada indice do array
}
