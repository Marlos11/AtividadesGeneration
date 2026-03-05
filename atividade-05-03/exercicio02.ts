import readlinesync from 'readline-sync'

let numeros = new Set<number>()

for (let i = 0; i < 10; i++) {
  let numero = readlinesync.questionInt("Digite uma numero: ")
  numeros.add(numero)
}

console.log("Listar dados do Set:")

for (const numero of numeros) {
  console.log(numero)
}