export function sleep(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(number ** 2), 3000);
    });
}