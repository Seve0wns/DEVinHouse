import { Produto } from "../ex03/Produto.js"
export class Pedido {
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
    calcularTotal() {
        let total = 0;
        this.listaProdutos.forEach(prod => total += prod.preco * prod.quantidade);
        return total;
    }
}