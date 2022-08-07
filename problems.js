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