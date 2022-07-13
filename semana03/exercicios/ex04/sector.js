function liberarBebidas(guests){
    return guests.map(guest=>{
        return Object.assign({openBar:guest.idade>17?true:false},guest)
    })
}
function separarCamarote(lista){
    return lista.filter(guest=>guest.setor==="camarote");
}
function separarPista(lista){
    return lista.filter(guest=>guest.setor==="pista");
}
function separarArquibancada(lista){
    return lista.filter(guest=>guest.setor==="arquibancada");
}
let primeiro={
    nome: "Ryan",
    sobrenome: "Azevedo",
    setor: "camarote",
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
let convidadosComBebidasProcessada=liberarBebidas(convidados);
let listaCamarote=separarCamarote(convidadosComBebidasProcessada);
let listaPista=separarPista(convidadosComBebidasProcessada);
let listaArquibancada=separarArquibancada(convidadosComBebidasProcessada);
listaCamarote.forEach(guest => {
    document.getElementById("camarote").innerHTML+=`<li>${guest.nome} ${guest.sobrenome}`
});
listaArquibancada.forEach(guest => {
    document.getElementById("arqui").innerHTML+=`<li>${guest.nome} ${guest.sobrenome}`
});
listaPista.forEach(guest => {
    document.getElementById("pista").innerHTML+=`<li>${guest.nome} ${guest.sobrenome}`
});