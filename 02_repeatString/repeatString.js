const repeatString = function(str, num) {
    let str0 = str
    for (let i = 1; i < num; ++i) {
        str0 = str0 + str;
    }
    if (num > 0) {
    return str0;
    }
    else if (num < 0) {
        return "ERROR";
    }
    else
    return "";
};

// Do not edit below this line
module.exports = repeatString;
