// ================================================== Ex01 Verificar maioridade:
// const idade = Number(prompt("digite sua idade"))

// if (idade <= 18) {
//     alert("você é criança");
// }
// else if (idade <= 60) {
//     alert("você é maior de idade");
// } else {
//     alert("você é idoso");
// }


// ================================================== Ex02 Verificar maioridade:
// let numero = Number(prompt("Digite um valor qualquer: "))
// if (numero <= 0){
//     alert(`O numero digitado é um número negativo: ${numero}  `)
// }else{
//     alert(`O numero digitado é um número positivo: ${numero}`)
// }

// ================================================== Ex03 Aprovação em uma prova:
// let nome = prompt("Qual o nome do Aluno? ")
// let nota1 = Number(prompt("Digite a primeira nota: "))
// let nota2 = Number(prompt("Digite a segunda nota: "))
// const media = (nota1 + nota2) / 2

// if (media >= 60) {
//     alert(`Parabens ${nome}, você foi aprovado! sua média foi de ${media}`)
// } else {
//     alert(`${nome}, infelizmente você foi reprovado, sua média foi de ${media}`)
// }

// ================================================== Ex04 Verificar se um número é positivo, negativo ou zero:
// let numero = Number(prompt("Digite um valor qualquer: "))
// if (numero < 0){
//     alert(`O numero digitado é um número negativo: ${numero}  `)
// }else if(numero >0){
//     alert(`O numero digitado é um número positivo: ${numero}`)
// }else{
//     alert(`Você digitou ${numero}`)
// }

// ================================================== Ex05 Classificação de idade:
// const idade = Number(prompt("digite sua idade"))

// if (idade <= 18) {
//     alert("você é criança");
// }
// else if (idade <= 60) {
//     alert("você é maior de idade");
// } else {
//     alert("você é idoso");
// }
// ================================================== Ex06 Verificar se um número é par ou ímpar:
// let numero = Number(prompt("Digite um numero"))

// if (numero % 2 == 0) {
//     alert("O numero é par")
// } else {
//     alert("O numero é impar")
// }

// ================================================== Ex01 INTERMEDIARIO calculadora.
// let numero1 = Number(prompt("Digite o primero numero"));
// let numero2 = Number(prompt("Digite o segundo numero"));

// let opera = prompt("Digite uma operação ex: (+ , - , *)");

// switch (opera) {
//     case "+":
//         alert(numero1 + numero2)
//         break;
//     case "-":
//         alert(numero1 - numero2)
//         break;
//     case "*":
//         alert(numero1 * numero2)
//         break;
//     case "/":
//         alert(numero1 / numero2)
//         break;
//     default:
//         alert("Operador invalido")
//         break;
// }

// ================================================== Ex02 Maior entre três números:
// let numero1 = Number(prompt("Digite o valor do primeiro numero"))
// let numero2 = Number(prompt("Digite o valor do segundo numero"))
// let numero3 = Number(prompt("Digite o valor do terceiro numero"))


// if (numero1 > numero2 && numero1 > numero3) {
//     alert(`O primeiro número ${numero1} é maior que ${numero2} e ${numero3}`)
// } else if(numero2 > numero1 && numero2 > numero3) {
//     alert(`O segundo número ${numero2} é maior que ${numero1} e ${numero3}`)
// }else{
//     alert(`O terceiro número ${numero3} é maior que ${numero1} e ${numero2}`)
// }
// ================================================== Ex03 10% OFF acima de 100

let numero1 = Number(prompt("Digite o valor do primeiro produto"))
let numero2 = Number(prompt("Digite o valor do segundo produto"))
let numero3 = Number(prompt("Digite o valor do terceiro produto"))
total = numero1 + numero2 + numero3

if (total >= 100) {
    total = total - (10 / 100)
    alert = ("Sua compra teve um desconto de 10% e passou a valer: ", total)
}else{
    alert(`Sua compra ficou ${total}`)
}

