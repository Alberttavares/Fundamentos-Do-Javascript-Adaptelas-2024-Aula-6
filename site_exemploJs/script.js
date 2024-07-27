document.getElementById('formIdade').addEventListener('submit', function (event) {
	event.preventDefault();

	const nome = document.getElementById('nome').value;
	const idade = parseInt(document.getElementById('idade').value);
	const divResultado = document.getElementById('resultado');

	if (idade >= 18) {
		divResultado.textContent = `${nome}, você está apto a dirigir.`;
	} else {
		divResultado.textContent = `${nome}, você não pode dirigir.`;
	}

	divResultado.style.display = 'block';
});
