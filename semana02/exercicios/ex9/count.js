let counter=0
function plus(){
    counter++;
    document.getElementById('counter').textContent=counter;
    console.log(counter);
}
function minus(){
    counter--;
    document.getElementById('counter').textContent=counter;
    console.log(counter);
}