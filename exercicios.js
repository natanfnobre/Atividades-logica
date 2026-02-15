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
// let numero1 = Number(prompt("Digite o valor do primeiro produto"));
// let numero2 = Number(prompt("Digite o valor do segundo produto"));
// let numero3 = Number(prompt("Digite o valor do terceiro produto"));
// let totalprod = (numero1 + numero2 + numero3);
// let total;
 
// if (totalprod >= 100) {
//     total = totalprod - (totalprod * (10 / 100));
//     alert(`Sua compra de ${totalprod} teve um desconto de 10% e passou a valer: ${total}`)
// } else {
//     alert(`Sua compra ficou ${total}`)
// }

// ================================================== Ex04 Sistema de login simples
// let usuario = String(prompt("Digite seu nome de usuário")).toLowerCase();
// let senha = prompt("Digite sua senha")

// if (usuario === "admin" && senha === "1234") {
//     alert("Login bem-sucedido! Bem-vindo, admin.");
// } else {
//     alert("Login falhou! Nome de usuário ou senha incorretos.");
// }



// ================================================== Ex01 Classificação de triângulos;
//Considere Triângulo equilátero (3 lados iguais), Triângulo isósceles (2 lados iguais) e Triângulo escaleno (3 lados diferentes).
// let lado1 = Number(prompt("Digite o valor do primeiro lado do triângulo"))
// let lado2 = Number(prompt("Digite o valor do segundo lado do triângulo"))
// let lado3 = Number(prompt("Digite o valor do terceiro lado do triângulo"))

// if (lado1 === lado2 && lado2 === lado3) {
//     alert("O triângulo é equilátero");
// } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
//     alert("O triângulo é isósceles");
// } else {
//     alert("O triângulo é escaleno");
// }

// ================================================== Ex02 Conversão de notas para conceitos:
// A (90-100), B (80-89), C (70-79), D (60-69), F (<60).
// let nota = Number(prompt("Digite a primeira nota do aluno"))
// let nota2 = Number(prompt("Digite a segunda nota do aluno"))
// let nota3 = Number(prompt("Digite a terceira nota do aluno"))
// let media = (nota + nota2 + nota3) / 3
// if (media >= 90 && media <= 100) {
//     alert(`A média do aluno é ${media} e o conceito é A`);
// } else if (media >= 80 && media < 90) {
//     alert(`A média do aluno é ${media} e o conceito é B`);
// }   else if (media >= 70 && media < 80) {
//     alert(`A média do aluno é ${media} e o conceito é C`);
// } else if (media >= 60 && media < 70) {
//     alert(`A média do aluno é ${media} e o conceito é D`);
// } else {
//     alert(`A média do aluno é ${media} e o conceito é F`);
// }
// ================================================== Ex03 Cálculo de IMC
// let peso = Number(prompt("Digite seu peso em kg"))
// let altura = Number(prompt("Digite sua altura em metros"))
// let imc = peso / (altura * altura)
// alert (`Seu IMC é ${imc.toFixed(2)}`)

// if (imc < 18.5) {
//     alert(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso.`);
// } else if (imc >= 18.5 && imc <24.99){
//     alert(`Seu IMC é ${imc.toFixed(2)} e você está com peso normal.`);
// }else if (imc >= 25 && imc < 29.99){
//     alert(`Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso.`);
// }else{
//     alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade.`);
// }
// ================================================== Ex04 Verificação de ano bissexto
// let ano = Number(prompt("Digite um ano para verificar se é bissexto: "))
// if ((ano % 4 === 0 && ano % 100) || (ano % 400 === 0))  {
//     alert(`O ano ${ano} é bissexto.`);
// } else {    
//     alert(`O ano ${ano} não é bissexto.`);
// }
