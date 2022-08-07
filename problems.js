// farenheit to celcius
// [23, 140, 212, 41] => [-5, 60, 100, 5]
// (32°F − 32) × 5/9 = 0°C

const getCelcius = (farenheit) => {
  return farenheit.map(value => (value - 32) * 5 / 9)
}

const positiveOrNegative = (number) => {
  // Sample code
  if (typeof number !== 'number') return "Not a number";
  if (number < 0) {
    return "Negative";
  }
  if (number === 0) {
    return "Zero";
  }
  return "Positive";
}

function compareTwoNumbers(a, b) {
  // Sample code
  if (typeof a !== 'number' || typeof b !== 'number') return "Inputs are not numbers";
  if (a > b) {
    return `${a} is greater than ${b}`;
  } else if (a < b) {
    return `${b} is greater than ${a}`;
  }
  return "Numbers are equal";
}