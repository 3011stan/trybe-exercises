const numbers = [4,2,3,1,6,8,22,32,25,23];
console.log(numbers.sort()); //[1,2,22,23,25,3,32,4,6,8]
const corrigeOrdenacao = (a, b) => {
	return a - b;
}
console.log(numbers.sort(corrigeOrdenacao));