
/* 
  Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:

*/

const leitura = require('readline-sync')

let primeiroNumero = leitura.questionInt("Digite o primeiro numero: ")

let segundoNumero = leitura.questionInt("Digite o segundo numero: ")

console.log("\n")

if (primeiroNumero >= segundoNumero) {
  console.log("Intervalo inválido!, programa finalizado")
} else {
  for (let intervalo = primeiroNumero; intervalo <= segundoNumero; intervalo++) {
    if (intervalo % 15 === 0) {
      console.log(`No intervalo entre ${primeiroNumero} e ${segundoNumero}: `)
      console.log(`${intervalo} é multiplo de 3 e 5`)
    }
  }

}
