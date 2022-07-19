function addAcc(list, acc) {
    list.innerHTML += `<option value=${acc.id}>${acc.nome}</option>`;
}
function fillAcc() {
    const html = document.getElementById("accounts");
    contasClientes.forEach(acc => {
        addAcc(html, acc);
    });
}
function validateValues(elements) {
    let invalid = false;
    elements.forEach((element) => {
        if (!element.value) {
            alert(`Valor inválido para o campo ${element.id}`);
            invalid = true;
        }
    })
    return invalid;
}
function withdraw(value, id) {
    id = parseInt(id);
    value = parseFloat(value);
    const acc = contasClientes.find(e => e.id === id);
    if (value <= 0) {
        alert("Valor inválido!");
    }
    else if (value > acc.saldo) {
        alert(`Saldo insuficiente!
        Saldo atual: ${acc.saldo}R$`);
    }
    else {
        acc.saldo -= value;
        alert(`Saque efetuado com sucesso!
        Novo saldo: ${acc.saldo}R$`);
    }
}
function deposit(value, id) {
    id = parseInt(id)
    value = parseFloat(value)
    const acc = contasClientes.find(e => e.id == id);
    if (value <= 0) {
        alert("Valor inválido!");
    }
    else {
        acc.saldo += value;
        alert(`Depósito efetuado com sucesso!
        Novo saldo: ${acc.saldo}R$`);
    }
}
function validatePass(typedPass,accPass){
    accPass=parseInt(accPass);
    accPass=contasClientes.find(e=>e.id===accPass);
    return typedPass===accPass.senha;
}
function operate() {
    const elements = {
        operation: document.getElementById("operations"),
        value: document.getElementById("value"),
        account: document.getElementById("accounts")
    }
    if (validateValues([elements.operation, elements.value, elements.account])) {
        return;
    }
    if(!validatePass(prompt("digite sua senha:"),elements.account.value)){
       return alert("Senha inválida!");
    }
    if (elements.operation.value === "sacar") {
        withdraw(elements.value.value, elements.account.value);
    }
    else {
        deposit(elements.value.value, elements.account.value);
    }
}
const contasClientes = [
    {
        id: 1,
        nome: "Cliente 01",
        saldo: 500,
        senha: "senha"
    },
    {
        id: 2,
        nome: "Cliente 02",
        saldo: 3000,
        senha: "1234"
    },
    {
        id: 3,
        nome: "Cliente 03",
        saldo: 5000,
        senha: "03041997"
    }
];
