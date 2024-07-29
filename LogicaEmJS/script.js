// Preciso saber se um aluno foi ou não aprovado
// em programação, a média para ser aprovado é 7
// abaixo disso, o aluno estará de prova final.


function verificarAprovacao(media) {
	if (media >= 7) {
		return "O aluno foi aprovado.";
	} else {
		return "O aluno estará de prova final.";
	}
}

let mediaAluno1 = 8.5;
let mediaAluno2 = 6.3;


console.log(verificarAprovacao(mediaAluno1));
console.log(verificarAprovacao(mediaAluno2));



// Preciso saber se um aluno foi ou não aprovado
// em matemática, a média das 3 provas
// para ser aprovado deve ser maior ou igual a 6
// abaixo disso, o aluno estará de prova final.


function verificarAprovacao(nota1, nota2, nota3) {
	let media = (nota1 + nota2 + nota3) / 3;

	if (media >= 6) {
		return `O aluno foi aprovado com média ${media.toFixed(2)}.`;
	} else {
		return `O aluno estará de prova final com média ${media.toFixed(2)}.`;
	}
}


let notaProva1 = 8;
let notaProva2 = 7.5;
let notaProva3 = 2;

let resultadoAluno = verificarAprovacao(notaProva1, notaProva2, notaProva3);
console.log(resultadoAluno);





// AGORA VERIFIQUE A MÉDIA DE 10 ALUNOS E DIGA SE ELES FORAM OU NÃO APROVADOS
function verificarAprovacao(media) {
	if (media >= 7) {
		return "O aluno foi aprovado.";
	} else {
		return "O aluno estará de prova final.";
	}
}

let medias = [8.5, 6.3, 7.0, 5.4, 9.1, 6.7, 7.5, 4.3, 8.0, 6.8];



let i = 0;

while (i < medias.length) {
	let resultado = verificarAprovacao(medias[i]);
	console.log(`Aluno ${i + 1}: ${resultado}`);
	i++;
}
