const romanNumerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
const helper = module.exports = {}

// determine if input is a string => convert to arabic
helper.isString = (value) => {
  return (typeof value === 'string' || value instanceof String)
}

// determine if input is number => convert to roman
helper.isNumber = (value) => {
  return typeof value === 'number' && isFinite(value)
}

// check whether value is in range => if not throw new error
helper.isInRange = (value) => {
  return (value >=1 && value <= 3999)
}

// check whether value is valid roman numeral => if not throw new error
helper.isValidRomanNumeral = (romanNumeral) => {
  const chars = [...romanNumeral]
  return chars.every((char) => romanNumerals.includes(char))
}
