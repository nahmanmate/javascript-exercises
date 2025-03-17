const fibonacci = function(n) {
    let int = parseInt(n)
    if (int < 0) return "OOPS";
    if (int === 0) return 0;

    let a = 0;
    let b = 1

    for (let i = 1; i < n; i++) {
        let temp = b
        b = a + b
        a = temp
    }
    return b;
}
console.log(fibonacci(9))

// Do not edit below this line
module.exports = fibonacci;
