// 1 - Crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os números 35 e 45 que irão ser substituídos pela palavra "PULOU"

// Fazer um "for" com a variável i, atribuindo as condições do exercício
// Depois coloco as exceções do meu algoritmo
// Não esquecer de dar o comando para continuar após as exceções
// imprime no console.


for (let i = 10; i <= 60; i +=5) {
if (i === 35 || i === 45){
    console.log('PULOU')
    continue
}
console.log(i)
}