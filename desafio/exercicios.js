let nomeUsuario = prompt("Qual seu nome? ");
let bebida;
let acucar;
let acompanhamento;
let pedido;

if (nomeUsuario !== "") {
    alert(`Olá ${nomeUsuario}, seja bem vindo a cafeteria`)
    bebida = prompt("Qual bebida você gostaria de pedir? ")
    acucar = prompt(`Deseja açucar no(a) ${bebida} ? (S/N)`)

    if (acucar = "S") {
        alert("Ok, vou colocar açucar")
    } else {
        alert("Certo, sem açucar então")
    }

    acompanhamento = prompt("Deseja algum acompanhamento? (S/N) ");
    if (acompanhamento = "S") {
        acompanhamento = prompt("Certo, qual acompanhento?");
    }else{
        alert("Sem acompanhamento")
    }

    pedido = prompt("Gostaria de fazer mais um pedido?")

} else {
    alert("Desculpe Sr(a), não atendemos quem não fala o nome")
}


