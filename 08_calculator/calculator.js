let testArray = [1, 3, 5, 10]

const add = function(a,b) {
  return a + b
	
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(array) {
  let answer = array.reduce((total, items) => {return total + items},0)
  return answer
};

const multiply = function(array) {
  return array.reduce((total, items) => { return total * items}, 1)
};

const power = function(a,b) {
  return Math.pow(a, b)
};

const factorial = function(integer) {
  // integer multiplation of last item by each other item before it
  if (integer === 0 || integer === 1)
    return 1;
  else 
  for (let i = integer - 1; i >= 1; i--) {
    integer *= i;
  }
  return integer
  // console.log(factorial)
};
console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
