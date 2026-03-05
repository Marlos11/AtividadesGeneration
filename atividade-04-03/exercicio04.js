/* 
  Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. Veja os exemplos abaixo:

*/
const leitura = require('readline-sync')


let numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let escolhaUsuario = leitura.questionInt("Digite o numero que voce deseja encontrar: ")

let numeroEncontrado = false;



for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === escolhaUsuario) {
    console.log(`O número ${escolhaUsuario} está localizado na posição: :${i}`)
    numeroEncontrado = true
    break

  }
}

if (!numeroEncontrado) {
  console.log(`O número ${escolhaUsuario} não foi encontrado!`)
}