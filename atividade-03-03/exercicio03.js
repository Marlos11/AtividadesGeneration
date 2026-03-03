const leitura = require('readline-sync')

let codigoProduto

let quantidade

const cachorroQuente = 10
const xSalada = 15
const xBacon = 18
const bauru = 12
const refrigerante = 8
const sucoDeLaranja = 13

console.log(" *********Seja bem vindo(a), Faça o seu pedido! *********************")

console.log("1 - Cachorro Quente: R$ 10.00 ")
console.log("2 - X-Salada: R$ 15.00 ")
console.log("3 - X-Bacon: R$ 18.00 ")
console.log("4 - Bauru: R$ 12.00")
console.log("5 - Refrigerante: R$ 8.00")
console.log("6 - Suco de laranja: R$ 13.00")

codigoProduto = leitura.questionInt("Digite o codigo do produto desejado ")

quantidade = leitura.questionInt("Digite a quantidade desejada ")


switch (codigoProduto) {
  case 1:
    console.log(`Produto: Cachorro quente, valor total da sua compra R$ ${quantidade * cachorroQuente}`)
    break;
  case 2:
    console.log(`Produto: X-Salada, valor total da sua compra R$ ${quantidade * xSalada}`)
    break;
  case 3:
    console.log(`Produto: X-Bacon, valor total da sua compra R$ ${quantidade * xBacon}`)
    break;
  case 4:
    console.log(`Produto: Bauru, valor total da sua compra R$ ${quantidade * bauru}`)
    break;
  case 5:
    console.log(`Produto: Refrigerante, valor total da sua compra R$ ${quantidade * refrigerante}`)
    break;
  case 6:
    console.log(`Produto: Suco de laranja, valor total da sua compra R$ ${quantidade * sucoDeLaranja}`)
    break;

  default:
    console.log("Opção invalida, tente novamente ....")
    break;
}