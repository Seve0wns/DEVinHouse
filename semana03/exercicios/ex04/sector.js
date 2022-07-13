function liberarBebidas(guests){
    return guests.map(guest=>{
        return Object.assign({openBar:guest.idade>17?true:false},guest)
    })
}
let primeiro={
    nome: "Ryan",
    sobrenome: "Azevedo",
    setor: "Camarote",
    idade: 23
};
let segundo={
    nome: "Tony",
    sobrenome: "Dias",
    setor: "camarote",
    idade: 29
};
let terceiro={
    nome: "Rodrigo",
    sobrenome: "Ramos",
    setor: "pista",
    idade: 15
};
let quarto={
    nome: "Thiago",
    sobrenome: "Freitas",
    setor: "pista",
    idade: 17
};
let quinto={
    nome: "Marcos",
    sobrenome: "Silva",
    setor: "arquibancada",
    idade: 19
};
let sexto={
    nome: "Will",
    sobrenome: "Mascarenhas",
    setor: "arquibancada",
    idade: 16
};

let convidados=[primeiro,segundo,terceiro,quarto,quinto,sexto];
console.log(convidados)
let convidadosComBebidasProcessada=liberarBebidas(convidados);
console.log(convidados);
