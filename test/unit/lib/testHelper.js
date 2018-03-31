const helper = require('../../../lib/helper')

describe('test helper', () => {
  describe('test isNumber', () => {
    it('returns `true` with a valid number', () => {
      expect(helper.isNumber(100)).to.be.true()
    })
    it('returns `false` with an invalid number', () => {
      expect(helper.isNumber(NaN)).to.be.false()
    })
    it('returns `false` for other input types', () => {
      expect(helper.isNumber('hello')).to.be.false()
      expect(helper.isNumber({})).to.be.false()
      expect(helper.isNumber([])).to.be.false()
    })
  })
  describe('test isString', () => {
    it('returns `true` with a string', () => {
      expect(helper.isString('hello')).to.be.true()
    })
    it('returns `true with a new String object`', () => {
      expect(helper.isString(new String('hello')))
        .to.be.true()
    })
    it('returns `false` for other input types', () => {
      expect(helper.isString(0)).to.be.false()
      expect(helper.isString({})).to.be.false()
      expect(helper.isString([])).to.be.false()
    })
  })
  describe('test isInRange', () => {
    context('with a value less than 1', () => {
      it('returns `false`', () => {
        expect(helper.isInRange(0)).to.be.false()
      })
    })
    context('with a value greater than 3999', () => {
      it('returns `false`', () => {
        expect(helper.isInRange(4000)).to.be.false()
      })
    })
    context('with values between 1 and 3999', () => {
      it('returns `true`', () => {
        expect(helper.isInRange(1)).to.be.true()
        expect(helper.isInRange(3999)).to.be.true()
      })
    })
  })
  describe('test isValidRomanNumeral', () => {
    context('when all characters are roman numerals', () => {
      it('returns `true`', () => {
        expect(helper.isValidRomanNumeral('XXIV')).to.be.true()
      })
    })
    context('when one or more characters are not roman numerals', () => {
      it('returns `false`', () => {
        expect(helper.isValidRomanNumeral('XX1V')).to.be.false()
      })
    })
  })
})
