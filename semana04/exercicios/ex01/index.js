function addAcc(list,acc){
    list.innerHTML+=`<option value=${acc.id}>${acc.nome}</option>`;
}
function fillAcc(){
    const html=document.getElementById("accounts");
    contasClientes.forEach(acc => {
        addAcc(html,acc);
    });
}
function withdraw(value,id){
    const acc=contasClientes.find(e=>e.id===id);
    if(value<=0){
        alert("Valor inválido!");
    }
    else if(value>acc.saldo){
        alert(`Saldo insuficiente!
        Saldo atual: ${acc.saldo}R$`);
    }
    else{
        acc.saldo-=value;
        alert(`Saque efetuado com sucesso!
        Novo saldo: ${acc.saldo}R$`);
    }
}
const contasClientes = [
    {
        id: 1,
        nome: "Cliente 01",
        saldo: 500
    },
    {
        id: 2,
        nome: "Cliente 02",
        saldo: 3000
    },
    {
        id: 3,
        nome: "Cliente 03",
        saldo: 5000
    }
];
