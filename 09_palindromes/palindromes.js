const palindromes = function (str) {
    let formattedStr = str.replace(/[^A-Za-z0-9]/g,"");
    let lowerCaseStr = formattedStr.toLowerCase();
    let array = lowerCaseStr.split("");
    // if first matches last, return true
    let median = 0.5 * array.length
    // for (i = 1; i < median; i ++) {
    //     if array[]
    let ispalindrome = true
    for (let i = 0; i < median; i++) {
            if (array[i] != array[array.length - 1 - i]) {
                ispalindrome = false
                break}
    }
    return ispalindrome
}
console.log(palindromes("rssdqr"));
// Do not edit below this line
module.exports = palindromes;