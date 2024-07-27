function calcularSalario() {
	const venda = prompt("Quanto o funcionário vendeu?");

	const vendaMensal = Number(venda);

	const salarioFixo = 1500;
	const taxaComissao = 0.03;

	const comissao = vendaMensal * taxaComissao;
	const salarioTotal = salarioFixo + comissao;


	if (vendaMensal > 20000) {
		console.log(`O funcionário receberá R$ ${salarioTotal.toFixed(2)}`);
		console.log(`O valor da comissão é de R$ ${comissao.toFixed(2)}`)
	} else {
		console.log(`O funcionário receberá R$ ${salarioFixo.toFixed(2)}`);
	}
}


calcularSalario()



// Faça uma função que recebe um array de números
//e retorna um novo array somente com números pares

function encontraPares() {
	let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
	let pares = []
	let index = 0

	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			pares[index] = array[i]
			index++
		}
	}
	return pares;
}

const resultado = encontraPares();
console.log(resultado); 
