const helper = require('./lib/helper')

const converter = module.exports = (value) => {
  // check for null or empty string => value required exception
  if (!value && value !== 0) return new Error('value required')

  if (helper.isString(value)) {
    // check for invalid roman numerals => invalid value exception
    if (!helper.isValidRomanNumeral(value)) return new Error('invalid value')
    const arabicNumeral = converter._convertToArabicNumeral(value)
    // check value is in range => invalid range exception
    if (!helper.isInRange(arabicNumeral)) return new Error('invalid range')
    // convert from roman numeral to arabic numeral
    return {
      toInt: () => arabicNumeral,
      toString: () => value
    }
  }

  if (helper.isNumber(value)) {
    // check value is in range => invalid range exception
    if (!helper.isInRange(value)) return new Error('invalid range')
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
