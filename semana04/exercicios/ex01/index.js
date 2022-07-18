function addAcc(){
    const html=document.getElementById("accounts");
    contasClientes.forEach(acc => {
        html.innerHTML+=`<option value=${acc.id}>${acc.nome}</option>`;
    });
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
