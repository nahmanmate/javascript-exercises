const add = function(a,b) {
  return a + b
	
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
  if (arr.length <1) {
    return 0;
  }
  else if (arr.length < 2) {
    return arr[0]
  }
	return arr.reduce((total,item) => {total + item},0)
};

const multiply = function(arr) {
  if (arr.length <1) {
    return 0;
  }
  else return arr.reduce((total, items) => {total * item}, 1)
};

const power = function(a,b) {
  return Math.pow(a, b)
};

const factorial = function(a) {
	return () => {
    if (a < 0)
      return -1;
    else if (a == 0)
      return 1;
    else if (a > 0)
      return (num * factorial(a-1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
