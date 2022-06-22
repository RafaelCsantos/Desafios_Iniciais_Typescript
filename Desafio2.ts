// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

//as profissões possíveis
enum Trabalho { 
    Músico,
    Biólogo,
    Engenheiro,
    Caixa,
}


// Definindo um tipo para especificar mais facilmente qual tipo de informação cada campo deve receber
type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho,
}


//Criando objeto usando como parâmetros as funções já pré definidas

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Músico
};

let pessoa2: Humano = {
    nome: 'Otavio',
    idade: 19,
    profissao: Trabalho.Caixa
};

let pessoa3: Humano = {
    nome: 'Rafael',
    idade: 19,
    profissao: Trabalho.Biólogo
};

let pessoa4: Humano = {
    nome: 'Stefanie',
    idade: 19,
    profissao: Trabalho.Engenheiro
};
