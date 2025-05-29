const convertToCelsius = function(num) {
  let toCelsius = (num - 32) * (5/9);
  if(toCelsius % 1 != 0) {
    return parseFloat(toCelsius.toFixed(1));
  }
  return toCelsius;
};

const convertToFahrenheit = function(num) {
  let toFahrenheit = num * (9/5) + 32;
  if(toFahrenheit % 1 != 0) {
    return parseFloat(toFahrenheit.toFixed(1));
  }
  return toFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
