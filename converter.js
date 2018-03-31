const helper = require('./lib/helper')

const converter = module.exports = (value) => {
  if (!value) return new Error('value required')

  if (helper.isString(value)) {
    if (!helper.isValidRomanNumeral(value)) return new Error('invalid value')
    const arabicNumeral = converter._convertToArabicNumeral(value)
    if (!helper.isInRange(arabicNumeral)) return new Error('invalid range')
    // convert from roman numeral to arabic numeral
    return {
      toInt: () => arabicNumeral,
      toString: () => value
    }
  }

  if (helper.isNumber(value)) {
    // convert from arabic numeral to roman numeral
    if (!helper.isInRange(value)) return new Error('invalid range')
    return {
      toInt: () => value,
      toString: () => converter._convertToRomanNumeral(value)
    }
  }

  return value
}

converter._convertToArabicNumeral = (romanNumeral) => {
  return romanNumeral
}

converter._convertToRomanNumeral = (arabicNumeral) => {
  return arabicNumeral
}
