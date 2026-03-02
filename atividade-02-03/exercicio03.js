/* 
  Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido. Veja o exemplo abaixo:

*/

let salarioBruto = 2000

let adicionalNoturno = 500

let horasExtras = 100

let desconto = 200

const salarioLiquido = (salarioBruto + adicionalNoturno) + (horasExtras * 5) - desconto

console.log(`Salário líquido é ${salarioLiquido}`)