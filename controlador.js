
let inputPrimeiroNome = document.getElementById("iptPrimeiroNome");
let inputUltimoNome = document.getElementById("iptUltimoNome");
let inputDataDeNascimento = document.getElementById("iptDataDeNascimento");
let inputCidade = document.getElementById("iptCidade");
let buttonCadastrar = document.getElementById("btnCadastrar");
let divContainerCards = document.getElementById("containerDeCards")


buttonCadastrar.addEventListener("click", quandoClicarEmCadastrar);

let modulo2 = new Turma('2º Módulo - Vespetino');

function quandoClicarEmCadastrar(){
    let alunoTemp = new Aluno(
        "",
        inputPrimeiroNome.value,
        inputUltimoNome.value,
        inputDataDeNascimento.value,
        inputCidade.value
    );

    modulo2.adicionarAluno(alunoTemp);
    desenharCards(divContainerCards);
}