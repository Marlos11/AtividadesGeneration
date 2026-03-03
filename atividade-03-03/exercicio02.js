/* 

  Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:

*/
const leitura = require('readline-sync')

let numero

numero = leitura.questionInt('Digite um numero: ')

//verifica se o número é par e positivo 
if (numero % 2 === 0 && numero > 0) {
  console.log(`O Número ${numero} é par e positivo!`)
} else if (numero % 2 !== 0 && numero < 0) {
  console.log(`O numero ${numero} é ímpar e negativo !`)
} else if (numero % 2 === 0 && numero < 0) {
  console.log(`O número ${numero} é par e negativo!`)

} else {
  console.log(`O número ${numero} é impar e positivo!`)
}


