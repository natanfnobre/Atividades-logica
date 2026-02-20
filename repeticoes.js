// Estrutura WHILE - FAÇA ATÉ
/* O while vai repetir até chegar em um determinado limite. Util quando sabemos ATÉ QUANDO queremos ir. Quando temos uma margem final do que queremos */
// let contador = 1

// while (contador <= 5) {
//     alert(`número digitado ${contador}/5`);
//     contador = contador +1
// }

// Do While - Util quando queremos algo específico do usuário. Repetir até receber o valor esperado
// let senha;

// do {
//     senha = prompt("Digite a senha")
// } while (senha !== "Padrao") {
//     alert("Acesso liberado")
// }

// FOR - Também utilizado quando sabemos um valor final, por exemplo, quero sempre que seja 10 itens (tem um fim)

// Ex01 Contagem de 1 a 10:
// let contador;

// for (contador = 1; contador <= 10; contador++) {

//     console.log(`O contador vale ${contador}`);

// }

// ==================================== Ex02 Tabuada de um número
// let contador
// let resultado
// for (contador = 1; contador <= 10; contador++){

//     resultado = contador * 5
//     console.log(`5 X ${contador} = ${resultado}`);

// }

// ============================== Ex03 Soma dos primeiros N números naturais
// const numero = Number(prompt("Digite um valor"))
// let contador = 1;
// let soma = 0

// while (contador <= numero) {

//     soma = soma + contador
//     contador++
//     console.log("A soma dos números de 1 até " + numero + " é: " + soma);
// }

// ============================ Ex04 Exibir os números pares de 1 a 50:

// let cont;
// for (cont = 0; cont <= 50; cont++) {

//     if (cont % 2 == 0) {
//         console.log(`O número ${cont} é par`);
//     }else{
//         console.log(`O número ${cont} é impar`);
//     }
// }

// ============================ Ex05 Jogo de adivinhação:
// let randomico;
// let escolha;

// randomico = Math.floor(Math.random() * 10) +1;

// escolha = parseInt(prompt("Tabela da loteria, digite um número de 1 à 10 e tente ganhar: "))

// if (randomico == escolha) {
//     alert(`Parabens!! você é o ganhador, o número sorteado foi ${randomico} e você escolheu ${escolha}`)
// }else{
//     alert(`Poxa que pena! o número sorteado foi ${randomico} e você escolheu ${escolha}`)
// }

// ============================Ex06 Contagem regressiva
// let contagem;
// contagem = parseInt(prompt("Digite um número para a contagem regressiva: "))

// while (contagem >= 0) {
    
//     console.log(`Contagem regressiva ${contagem}`);
//     contagem --;    
// }



