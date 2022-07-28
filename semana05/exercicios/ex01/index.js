import { saudacao } from "./saudacao.js";
import saudacaoEspecial from "../ex02/saudacao-especial.js";
import { Produto } from "../ex03/Produto.js";
import { Pedido } from "../ex04/Pedido.js";
import * as dom from "../ex08/dom.js";
import { sleep } from "../ex09/sleep.js"

console.log(saudacaoEspecial("Jhonathan"));
const prods = [
    new Produto("sword", 600, true, 3),
    new Produto("shield", 450, true, 5),
    new Produto("platemail", 500, false, 0),
    new Produto("greaves", 300, true, 1),
    new Produto("helmet", 250, true, 150)
]
const pedidos = [
    new Pedido(20220001, "Cain"),
    new Pedido(20220002, "Luu")
]
pedidos[0].adicionarProduto(prods[0]);
pedidos[0].adicionarProduto(prods[1]);
pedidos[0].adicionarProduto(prods[2]);
pedidos[1].adicionarProduto(prods[3]);
pedidos[1].adicionarProduto(prods[4]);

const pedidosEl = document.getElementById("pedidos");
pedidos.forEach(pedido => pedidosEl.appendChild(dom.elementPedido(pedido)));
sleep(3).then((result) => console.log(result));