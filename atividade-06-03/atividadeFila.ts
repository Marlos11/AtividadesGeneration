import { Queue } from '../modulosQueueStack/Queue '

import readlinesync = require("readline-sync");

const filaClientes = new Queue<string>()

let continuar: boolean = true

let opcao: number = 0

do {
  console.log("1 - Adicionar Cliente na fila ");
  console.log("2 - Listar todos os Clientes");
  console.log("3 - Retirar Cliente da fila");
  console.log("0 - Sair");

  opcao = readlinesync.questionInt("Escolha uma opcao: ")

  switch (opcao) {
    case 1:
      filaClientes.enqueue(readlinesync.question("Adicionar novo Cliente a fila:"))
      console.log("Cliente adicionado!")
      break
    case 2:
      filaClientes.printQueue()
      break
    case 3:
      filaClientes.dequeue()
      break
    case 0:
      continuar = false
      console.log("Programa Finalizado!")
      break
    default:
      console.log("Opcão invalida")
  }

} while (continuar);

