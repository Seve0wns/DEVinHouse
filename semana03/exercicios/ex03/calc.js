function calc(op,n1,n2){
    if(op==="+"){
        return n1+n2;
    }
    if(op==="-"){
        return n1-n2;
    }
    if(op==="*"){
        return n1*n2;
    }
    if(op==="/"){
        return n1/n2;
    }
}

let input=prompt("Qual a operação que deseja fazer?"),operator=input.charAt(input.search(/\++|\-+|\*+|\/+/));
let numbers=input.split(operator);
document.getElementById("operation").innerText=input;
document.getElementById("result").innerText=calc(operator,parseInt(numbers[0]),parseInt(numbers[1]));
