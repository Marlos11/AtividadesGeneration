const leitura = require('readline-sync')

/* 
  Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

*/



let colaborador
let codigoDoCargo
let salario



console.log("1 - Gerente")
console.log("2 - Vendedor")
console.log("3 - Supervisor ")
console.log("4 - Motorista ")
console.log("5 - Estoquista ")
console.log("6 - Técnico de TI")


colaborador = leitura.question("Digite o nome do colaborador: ")
codigoDoCargo = leitura.questionInt("Digite o codigo do cargo do colaborador ")
salario = leitura.questionInt("Digite seu salario: ")


switch (codigoDoCargo) {
  case 1:
    console.log(`Nome colaborador: ${colaborador}, Cargo: Gerente, salário reajustado : R$ ${(1.10 * salario)} `)

    break;
  case 2:
    console.log(`Nome colaborador: ${colaborador}, Cargo: Vendedor , salário reajustado : R$ ${(1.07 * salario)} `)

    break;
  case 3:
    console.log(`Nome colaborador: ${colaborador}, Cargo: Supervisor , salário reajustado : R$ ${(1.09 * salario)} `)

    break;
  case 4:
    console.log(`Nome colaborador: ${colaborador}, Cargo: Motorista, salário reajustado : R$ ${(1.06 * salario)} `)

    break;
  case 5:
    console.log(`Nome colaborador: ${colaborador}, Cargo: Estoquista , salário reajustado : R$ ${(1.05 * salario)} `)

    break;
  case 6:
    console.log(`Nome colaborador: ${colaborador}, Cargo: Técnico de TI, salário reajustado : R$ ${(1.08 * salario)} `)

    break;

  default:
    console.log("Opção Invalida")
    break;
}