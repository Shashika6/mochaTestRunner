const chai = window.chai
const expect = chai.expect

describe('getCelcius', () => {
  it('should convert farenheit to celcius for all values in an array', () => {
    expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    expect(getCelcius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
    expect(getCelcius([104, 122, 158, 176])).to.deep.equal([40, 50, 70, 80])
  })
})

describe('positiveOrNegative', () => {
  it('should return positive if number is positive or negative', () => {
    expect(positiveOrNegative(20)).to.equal("Positive");
  })
  it('should return negative if number is positive or negative', () => {
    expect(positiveOrNegative(-10)).to.equal("Negative");
  })
  it('should return zero', () => {
    expect(positiveOrNegative(0)).to.equal("Zero");
  })
  it('should return not a number', () => {
    expect(positiveOrNegative("abc")).to.equal("Not a number");
  })
})

describe('compareTwoNumbers', () => {
  it('should return numbers are equal', () => {
    expect(compareTwoNumbers(10, 10)).to.equal("Numbers are equal");
  })
  it('should return 10 is greater than 2', () => {
    expect(compareTwoNumbers(10, 2)).to.equal("10 is greater than 2");
  })

  it('should return invalid input if not numbers', () => {
    expect(compareTwoNumbers("10", 2)).to.equal("Inputs are not numbers");
  })

  it('should return invalid input if no input', () => {
    expect(compareTwoNumbers()).to.equal("Inputs are not numbers");
  })
})