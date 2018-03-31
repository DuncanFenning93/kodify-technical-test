const romanNumerals = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
const helper = module.exports = {}

helper.isString = (value) => {
  return (typeof value === 'string' || value instanceof String)
}

helper.isNumber = (value) => {
  return typeof value === 'number' && isFinite(value)
}

helper.isInRange = (value) => {
  return (value >=1 && value <= 3999)
}

helper.isValidRomanNumeral = (romanNumeral) => {
  const chars = [...romanNumeral]
  return chars.every((char) => romanNumerals.includes(char))
}
