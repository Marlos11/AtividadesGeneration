const leitura = require('readline-sync')


let salario

//entrada de dados de  salario :
salario = leitura.questionInt('Digite o Salario: ')
console.log(`O salário digita foi:R$ ${salario}`)

// entrada de dados abono 
let abono
abono = leitura.questionInt('Digite o Abono: ')
console.log(`O abono digitado foi:R$ ${abono}`)

let novoSalario = salario + abono

console.log(`Seu salario anterior era R$${salario} com o valor de R$${abono} recebido de abono, seu novo salário passa a ser de R$${novoSalario}`)