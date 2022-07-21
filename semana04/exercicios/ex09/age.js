function classify() {
    let input = parseInt(document.getElementById("age").value);
    let res;
    if (input < 0) {
        res = "";
    }
    else if (input <= 15) {
        res = "Jovem";
    }
    else if (input < 65) {
        res = "Adulto"
    }
    else {
        res = "Idoso"
    }
    document.getElementById("class").innerText = res;
}