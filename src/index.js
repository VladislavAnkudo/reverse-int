module.exports = function reverse (n) {
    let minus = Math.abs(n)
    let str = String(minus)
    let number1 = str.split("");
    let number2 = number1.reverse();
    let number3 = Number(number2.join(""));
    return number3
}
