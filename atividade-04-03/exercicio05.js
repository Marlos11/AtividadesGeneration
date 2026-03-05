

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let somaPrincipal = 0
let somaSecundaria = 0

console.log("Elementos da Diagonal Principal: ")

for (let i = 0; i < 3; i++) {
  console.log(matriz[i][i])
  somaPrincipal += matriz[i][i]

}

console.log("\nElementos da Diagonal Secundária:")

for (let i = 0; i < 3; i++) {
  console.log(matriz[i][2 - i])
  somaSecundaria += matriz[i][2 - i]
}

console.log(`Soma dos Elementos da Diagonal Principal:${somaPrincipal}`)
console.log(`Soma dos Elementos da Diagonal Secundária: ${somaSecundaria}`)