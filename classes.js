class Aluno{
    constructor(foto, primeiroNome, ultimoNome, datadeNascimento, cidade){
        this.foto = foto;

        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;

        this.datadeNascimento = new Date(datadeNascimento);
        this.cidade = cidade;
    }

    /** Retona o nome do aluno de acordo com o padrão brasileiro */
    getNomePadraoBrasileiro(){
        return`${this.primeiroNome} ${this.ultimoNome}`;
    }

    getNomePadraoAmericano(){
        return`${this.ultimoNome}, ${this.primeiroNome}`;
    }

    /** Retorna a idade do aluno com base apenas no ano de nascimento. */
    getIdade(){
        let hoje = new Date();

        let idade = hoje.getFullYear() - this.datadeNascimento.getFullYear();
        return idade;
    }
}
    // classe container

    //adiciona 2 atributos a essa classe
    //titulo
    //listaDeAlunos

    //o construtor deverá ter 1 entrada: título
    //o construtor deverá inciializar:
    //  o atributo titulo com a entrada titulo
    //  e o atributo listaDeAlunos com um array vazio

class Turma{
    constructor(titulo){
        this.titulo = titulo;
        this.listaDeAlunos = [];
    }
    adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno);
    }    
}