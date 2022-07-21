function verif() {
    let res = parseInt(document.getElementById("number").value) % 2 === 0 ? "par" : "ímpar";
    document.getElementById("result").innerText = "O número é " + res;
}