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
}