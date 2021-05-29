// 3- Crie uma função que recebe 2 parâmetros e retorne o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divisao (numero1, numero2){

    if (numero1, numero2 %2 ===0) {

        return `O número ${numero1/numero2} é par`
            }
            else if (numero1 * numero2 % 2 !== 0){
                return `O número ${numero1/numero2} é impar`
            }
} console.log(divisao(40,2))