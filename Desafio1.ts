
/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John"; */

// Versao 1
const funcionario = {
    codigo: 20,
    nome: 'Rafael'
};

// Versao 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 23,
    nome: 'Rafael'
}

// Versao 3
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}