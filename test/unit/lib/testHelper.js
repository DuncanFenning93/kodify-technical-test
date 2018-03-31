const helper = require('../../../lib/helper')

describe('test helper', () => {
  describe('test isNumber', () => {
    it('returns true with a valid number', () => {
      expect(helper.isNumber(100)).to.be.true()
    })
    it('returns false with an invalid number', () => {
      expect(helper.isNumber(NaN)).to.be.false()
    })
    it('returns false for other input types', () => {
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
})
