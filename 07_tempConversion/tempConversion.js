const convertToCelsius = function(x) {
  let celsTemp = (x - 32) * (5/9);
  let roundedCelsTemp = Math.round(celsTemp *10) / 10
  return roundedCelsTemp
};
const convertToFahrenheit = function(y) {
  let farenTemp = (y * 9 / 5) + 32;
  let roundedFarenTemp = Math.round(farenTemp * 10) / 10
  return roundedFarenTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
