const sumAll = function(min,max) {
    if (min < 0 || max < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR"
    }
    if (min > max) {
        //assign temporary value
        const temp = min;
        //use temp value to swap min and max
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};
const sum = sumAll(1,4)
sumAll(1,4)
console.log(sum)

// Do not edit below this line
module.exports = sumAll;
