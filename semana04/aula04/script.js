function handleClick() {
    items.push("<li>" + document.getElementById("in").value + "</li>");
    document.getElementById("todo").innerHTML = items;
}
function handleKeyUp(event) {
    const filteredItems = items.filter(item => item.includes(event.target.value));
    document.getElementById("todo").innerHTML = filteredItems;
}
const items = [];
document.getElementById("in").addEventListener("keyup", handleKeyUp)
document.getElementById("submit").addEventListener("click", handleClick);