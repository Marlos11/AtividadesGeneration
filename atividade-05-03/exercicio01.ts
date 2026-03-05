import readlineSync from "readline-sync"

let cores: string[] = []

for (let i = 0; i < 5; i++) {
  let cor = readlineSync.question("Digite uma cor: ")
  cores.push(cor)
}

console.log("\n")

console.log(`Listar todas as cores:`)
for (let cor of cores) {
  console.log(cor)
}
console.log("\n")
cores.sort()

console.log(`Ordenar as cores: `)
for (const cor of cores) {
  console.log(cor)
}