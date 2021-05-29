// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function calcular (numero1, numero2){

let operação = 'soma'

switch(operação) {

   case 'soma': 
   console.log(`A sua soma deu: ${numero1 + numero2}`)
   break

   case 'divisao':
   console.log(`A sua divisão deu:${numero1/numero2}`)
   break

   case 'multiplicação':
   console.log(`A Sua multiplicação deu: ${numero1*numero2}`)
   break

   case 'subtração':
   console.log(`A sua divisão deu: ${numero1-numero2}`)
   break

default:
    console.log('Informe dados válidos')
    }
}
    console.log(calcular(500,250))