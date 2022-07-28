export function sleep(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(number ** 2), 3000);
    });
}
export function showTime() {
    setInterval(() => { console.log(new Date().toLocaleTimeString("pt-BR")) }, 2000);
}