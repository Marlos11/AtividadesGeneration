/* 
  Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

*/

let a = 2
let b = 4
let c = 5

// verifica se A + B é maior que C 
if (a + b > c) {
  console.log(`A soma de A + B é ${a + b} e C tem o valor de ${c}, com isso chegamos a conclusão que a soma de A + B é maior que C `)
}

console.log("************************************************************")
a = 2
b = 2
c = 5

// verifica se a soma de A + B é menor que C 

if (a + b < c) {
  console.log(`A soma de A + B é ${a + b} e C tem o valor de ${c}, com isso chegamos a conclusão que a soma de A + B é menor que C `)
}
console.log("************************************************************")

a = 2
b = 2
c = 4

// verifica se a soma de A + B é igual a C 

if (a + b === c) {
  console.log(`A soma de A + B é ${a + b} e C tem o valor de ${c}, com isso chegamos a conclusão que a soma de A + B é igual ao valor de  C `)
}