import { Stack } from "../modulosQueueStack/Stack";
import readlinesync = require("readline-sync");

const retiradaLivros = new Stack<string>();

let continuar: boolean = true

let opcao: number = 0

do {
  console.log("1 - Adicionar Livro na Pilha ");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar Livro da pilha");
  console.log("0 - Sair");

  opcao = readlinesync.questionInt("Escolha uma opcao: ")

  switch (opcao) {
    case 1:
      retiradaLivros.push(readlinesync.question("Adicionar novo Cliente a fila:"))
      console.log("Livro adicionado!")
      break
    case 2:
      retiradaLivros.printStack()
      break
    case 3:
      retiradaLivros.pop()
      retiradaLivros.printStack()
      console.log("Um Livro foi retirado da pilha!")
      break
    case 0:
      continuar = false
      console.log("Programa Finalizado!")
      break
    default:
      console.log("Opcão invalida")
  }

} while (continuar);




