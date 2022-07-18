class Operation {
    constructor(equation, priorityMod = 0) {
        this.equation = equation;
        let opi = this.setInfo(equation, priorityMod);
        let nextEq = this.equation.slice(opi + 1);
        if (this.operator === "(") {
            Object.assign(this, new Operation(nextEq, priorityMod + 4))
        }
        else {
            this.left = parseInt(this.equation);
            if (this.left < 0) {
                opi = this.setInfo(nextEq, priorityMod) + 1;
                nextEq = this.equation.slice(opi + 1);
            }
            switch (this.operator) {
                case ")":
                    Object.assign(this, new Operation(this.left + nextEq, priorityMod - 4));
                    break;
                case "":
                    this.right = null;
                    break;
                default:
                    this.right = new Operation(nextEq, priorityMod)
            }
        }
    }
    setInfo(equation, priorityMod) {
        let opi = equation.search(regex);
        this.operator = equation.charAt(opi);
        this.priority = this.setPriority() + priorityMod;
        return opi;
    }
    solve() {
        if (this.operator === "") {
            return this.left;
        }
        this.rotate();
        return this.solve();
    }
    rotate() {
        while (this.priority < this.right.priority) {//solução parenteses
            this.right.rotate();
        }
        this.right.left = calc(this.operator, this.left, this.right.left);
        Object.assign(this, this.right);
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
    if (document.getElementById("debug").checked) {
        console.log(op);
    }
    else {
        document.getElementById("result").innerText = op.solve();
    }
}
const regex = /\++|\-+|\*+|\/+|\^+|\(+|\)+/;