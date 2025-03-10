const removeFromArray = function(passedArray, ...valueToRemove) {
    const newArray = []
    passedArray.forEach(items => {
        if (!valueToRemove.includes(items)) {
            newArray.push(items)
        }
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
