
// Função anônima
const somar = function (a, b) {
	return a + b;
};
console.log(somar(10, 25));


// Função declarativa
function saudacao(nome) {
	return `Olá ${nome}`;
}
console.log(saudacao("Albert"));

//Arrow function
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 3)); // 6
