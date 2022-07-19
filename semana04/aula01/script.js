let idade=parseInt(prompt("Qual a idade?"));
let res;
console.log(!idade)
if(idade<0||!idade){
    res="Idade inválida";
}
else if(idade<16){
    res="Não pode votar!";
}
else if(idade<18||idade>=70){
    res="Pode votar!";
}
else{
    res="Precisa votar!";
}
alert(res);