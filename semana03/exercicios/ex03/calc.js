class Operation {
    constructor(equation, priorityMod = 0) {
        this.equation = equation;
        let opi = equation.search(regex);
        this.operator = equation.charAt(opi);
        this.priority = this.setPriority() + priorityMod;
        if (this.operator === "") {
            this.left = parseInt(equation);
            this.right = null;
        }
        else if (this.operator === "(") {
            let buffer = new Operation(equation.slice(opi + 1), priorityMod + 4);
            this.useBuffer(buffer);
        }
        else if (this.operator === ")") {
            this.right = new Operation(equation.slice(opi + 1), priorityMod - 4);
            this.left = parseInt(equation);
        }
        else {
            this.left = parseInt(equation);
            this.right = new Operation(equation.slice(opi + 1), priorityMod);
        }
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
        if (this.priority <= this.right.priority) {//solução parenteses
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
    //console.log(op);
    document.getElementById("result").innerText = op.solve();
}
const regex = /\++|\-+|\*+|\/+|\^+|\(+|\)+/;
//(3*(4+(1*2)))*2+1+1+1+1^2^3
// const regex = /\++|\-+|\*+|\/+/;
// let input = prompt("Qual a operação que deseja fazer?");//,operator=input.charAt(input.search(/\++|\-+|\*+|\/+/));
//let numbers=input.split(operator);
// let op = new Operation(input);
// document.getElementById("operation").innerText = input;
// document.getElementById("result").innerText = op.solve();//calc(operator,parseInt(numbers[0]),parseInt(numbers[1]));
