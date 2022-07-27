import { Produto } from "../ex03/produto.js"
class Pedido {
    numeroPedido;
    dataPedido;
    estaPago;
    listaProdutos;
    nomeCliente;
    constructor(numero, cliente) {
        this.numeroPedido = numero;
        this.nomeCliente = cliente;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = new Array();
    }
    adicionarProduto(produto) {
        if (produto instanceof Produto) {
            this.listaProdutos.push(produto);
        }
    }
}