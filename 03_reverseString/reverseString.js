function reverseString(str) {
    //split string and return array of characters
    let splitString = str.split("");
    //reverse array character order
    let reverseArray = splitString.reverse();
    //join array of characters back to string
    let reverseString = reverseArray.join("")
    //return reversed string
    return reverseString;
};
// Do not edit below this line
module.exports = reverseString;
