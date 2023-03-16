/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases usando uma estrutura de condição:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/

function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  let mensagem = "";
  // evite mexer no código acima!
  
const media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media === 0) {
  mensagem = 'Infelizmente você zerou a prova :('
} else if ( media > 0 && media <= 3) {
  mensagem = `Caramba, deu ruim, você obteve média ${media}! Estude mais e tente novamente!`
} else if (media > 3 && media < 6) {
  mensagem = `Você obteve média ${media}! Falta pouco para a média.`
} else if (media >= 6 && media <= 7) {
  mensagem = `Você está na média com ${media}.`
} else if (media > 7 && media < 10) {
  mensagem = `Notão! Sua média é ${media}!`
} else if (media === 10) {
  mensagem = `Hoje é seu aniversário? Pq você ta de parabéns! 10 de média.`
} else if (media > 10) {
  mensagem = `Verifique se as notas estão corretas, pois a média deu acima de 10.`
} else {
  mensagem = `Preencha todas as notas para calcular a média corretamente.`
}
   
  /* Observação: Foram consideradas outras condições para alguns criérios para as mensagens dos resultados das médias,
  pois alguns intervalos ficariam errados, como exemplo entre 3 e 3.1 não teria nenhum critério sendo atendido. 
  Acredito que atenderia se conseguisse arredondar o resultado da média com uma casa decimal. Tentei fazer pela função
  "Math.round()", mas só estava conseguindo deixar com apenas um número inteiro. 

  Sendo assim, foram considerados diferente do solicitado os seguintes intervalos:
  Entre 0.1 e 3, considerado > 0 e <= 3
  Entre 3.1 e 5.9, considerado > 3 e < 6
  Entre 7.1 e 9.9, considerado >7 e < 10
  */

  
  // evite mexer na linha de código abaixo!
  document.getElementById("situacaoAluno").innerHTML = mensagem;
}

