const helper = require('./lib/helper')
const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

const converter = module.exports = (value) => {
  // check for null or empty string => value required exception
  if (!value && value !== 0) return new Error('value required')

  // convert from roman numeral to arabic numeral
  if (helper.isString(value)) {
    // check for invalid roman numerals => invalid value exception
    if (!helper.isValidRomanNumeral(value)) return new Error('invalid value')
    const arabicNumeral = converter._convertToArabicNumeral(value)
    // check value is in range => invalid range exception
    if (!helper.isInRange(arabicNumeral)) return new Error('invalid range')
    return {
      toInt: () => arabicNumeral,
      toString: () => value
    }
  }

  // convert from arabic numeral to roman numeral
  if (helper.isNumber(value)) {
    // check value is in range => invalid range exception
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
  let romanNumeral = ''
  Object.keys(map).forEach((numeral) => {
    while (arabicNumeral >= map[numeral]) {
      romanNumeral += numeral
      arabicNumeral -= map[numeral]
    }
  })
  return romanNumeral
}
