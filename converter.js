const helper = require('./lib/helper')

const converter = module.exports = (value) => {
  if (!value) return new Error('value required')

  if (helper.isString(value)) {
    // convert from roman numeral to arabic numeral
    return {
      toInt: () => converter._convertToArabicNumeral(value),
      toString: () => value
    }
  }

  if (helper.isNumber(value)) {
    // convert from arabic numeral to roman numeral
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
