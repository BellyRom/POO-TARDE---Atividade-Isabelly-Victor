function desenharCards(container){

    container.innerHTML = ""

for (let i = 0; i < modulo2.listaDeAlunos.length; i++){
    container.innerHTML +=`
    
    <div class = "card">
        <img class = "foto" src = "img/anonimo.jpeg" />
        <div class = "nome"> ${modulo2.listaDeAlunos[i].getNomePadraoBrasileiro()} </div>
        <div class = "idade"> ${modulo2.listaDeAlunos[i].getIdade()} Anos</div>
        <div class = "cidade"> Cidade: ${modulo2.listaDeAlunos[i].cidade}</div>
    
    </div>
    
   `;
}
}