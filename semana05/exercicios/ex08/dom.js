function elementProduto(produto) {
    let el = document.createElement("li");
    el.className = "item";
    el.innerText = `${produto.nome} - ${produto.quantidade} - ${produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;
    return el;
}
export function elementPedido(pedido) {
    let el = document.createElement("li");
    el.className = "pedido";
    el.innerHTML = `
        <p>Numero: ${pedido.numeroPedido}</p>
        <p>Data: ${pedido.dataPedido}</p>
        <p>Cliente: ${pedido.nomeCliente}</p>
        <p>Valor total: ${pedido.calcularTotal().toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        <p>Está pago? ${pedido.estaPago ? "Sim" : "Não"}</p>`;
    let [label, lista] = printProds(pedido.listaProdutos);
    el.appendChild(label);
    el.appendChild(lista);
    return el;
}
function printProds(lista) {
    let label = document.createElement("label");
    label.htmlFor = "produtos";
    label.innerText = "Produtos:";
    let el = document.createElement("ul");
    el.name = "produtos";
    lista.forEach(prod => el.appendChild(elementProduto(prod)));
    return [label, el];
}