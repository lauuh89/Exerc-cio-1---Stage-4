/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/
alert("Iremos fazer o calculo de dois digitos")
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberTwo / numberTwo
let rest = numberOne % numberTwo

if(sum % 2 == 1) {
  alert("O resultado da soma: " + sum + ', é impar')
} else {
  alert("O resultado da soma: " + sum + ', é par')
}


alert("O resultado da subtração: " + sub)
alert("O resultado da multiplicação: " + mult)
alert("O resultado da divisão: " + div)
alert("O resultado do resto: " + rest)

if (numberOne == numberTwo) {
  alert('Os números são iguais')
} else {
  alert("Os números são diferentes")
}