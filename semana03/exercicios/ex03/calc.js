class Operation {
    constructor(equation, priorityMod = 0) {
        this.setInfo(equation,priorityMod);
        if (this.operator === "") {
            this.left = parseInt(this.equation);
            this.right = null;
        }
        else if (this.operator === "(") {
            let buffer = new Operation(this.equation.slice(this.opi + 1), priorityMod + 4);
            this.useBuffer(buffer);
        }
        else if (this.operator === ")") {
            this.right = new Operation(this.equation.slice(this.opi + 1), priorityMod - 4);
            this.left = parseInt(this.equation);
        }
        else {
            this.left = parseInt(this.equation);
            if(this.left<0){
                this.setInfo(this.equation.slice(this.opi+1),priorityMod)
            }
            this.right = new Operation(this.equation.slice(this.opi + 1), priorityMod);
        }
    }
    setInfo(equation,priorityMod){
        this.equation=equation;
        this.opi = equation.search(regex);
        this.operator = equation.charAt(this.opi);
        this.priority = this.setPriority() + priorityMod;
    }
    useBuffer(buffer) {
        this.equation = buffer.equation;
        this.operator = buffer.operator;
        this.priority = buffer.priority;
        this.left = buffer.left;
        this.right = buffer.right;
    }
    solve() {
        if (this.operator === "") {
            return this.left;
        }
        this.rotate();
        return this.solve();
    }
    rotate() {
        while (this.priority <= this.right.priority) {//solução parenteses
            this.right.rotate();
        }
        this.left = calc(this.operator, this.left, this.right.left);
        this.operator = this.right.operator;
        this.priority = this.right.priority;
        this.right = this.right.right;
    }
    setPriority() {
        if (this.operator === "" || this.operator === "(" || this.operator === ")") {
            return 0;
        }
        if (this.operator === "+" || this.operator === "-") {
            return 1;
        }
        if (this.operator === "*" || this.operator === "/") {
            return 2;
        }
        if (this.operator === "^") {
            return 3;
        }
    }
}
function calc(op, n1, n2) {
    if (!n2 && n2 !== 0) {//solução parenteses
        return n1;
    }
    switch (op) {
        case "":
            return n1;
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
        case "^":
            return n1 ** n2;
        default:
            return "invalid operation";
    }
}
function calculator() {
    let input = document.getElementById("operation").value;
    let op = new Operation(input);
    if(document.getElementById("debug").checked){
        console.log(op);
    }
    else{
        document.getElementById("result").innerText = op.solve();
    }
}
const regex = /\++|\-+|\*+|\/+|\^+|\(+|\)+/;