const converter = require('../../converter')

describe('test converter', () => {
  context('with invalid values', () => {
    context('with a null value', () => {
      it('throws value required exception', () => {
        expect(converter(null)).to.have.property('message')
          .and.to.equal('value required')
      })
    })
    context('with no value', () => {
      it('throws value required exception', () => {
        expect(converter()).to.have.property('message')
          .and.to.equal('value required')
      })
    })
    context('with value `0`', () => {
      it('throws invalid range exception', () => {
        expect(converter(0)).to.have.property('message')
          .and.to.equal('invalid range')
      })
    })
    context('with value `10000`', () => {
      it('throws invalid range exception', () => {
        expect(converter(10000)).to.have.property('message')
          .and.to.equal('invalid range')
      })
    })
    context('with value `MMMMCMXCIX`', () => {
      it('throws invalid range exception', () => {
        expect(converter('MMMMCMXCIX')).to.have.property('message')
          .and.to.equal('invalid range')
      })
    })
    context('with value `MMMMDMXCIX`', () => {
      it('throws invalid range exception', () => {
        expect(converter('MMMMDMXCIX')).to.have.property('message')
          .and.to.equal('invalid range')
      })
    })
    context('with string value `1473`', () => {
      it('throws invalid value exception', () => {
        expect(converter('1473')).to.have.property('message')
          .and.to.equal('invalid value')
      })
    })
    context('with value `CD1X`', () => {
      it('throws invalid value exception', () => {
        expect(converter('CD1X')).to.have.property('message')
          .and.to.equal('invalid value')
      })
    })
    context('with value `error`', () => {
      it('throws invalid value exception', () => {
        expect(converter('error')).to.have.property('message')
          .and.to.equal('invalid value')
      })
    })
  })
  context('with a roman numeral', () => {
    context('with value `I`', () => {
      it('returns `1`', () => {
        const romanNumber = converter('I')
        expect(romanNumber.toString()).to.equal('I')
        expect(romanNumber.toInt()).to.equal(1)
      })
    })
    context('with value `III`', () => {
      it('returns `3`', () => {
        const romanNumber = converter('III')
        expect(romanNumber.toString()).to.equal('III')
        expect(romanNumber.toInt()).to.equal(3)
      })
    })
    context('with value `IIII`', () => {
      it('returns `4`', () => {
        const romanNumber = converter('IIII')
        expect(romanNumber.toString()).to.equal('IIII')
        expect(romanNumber.toInt()).to.equal(4)
      })
    })
    context('with value `IV`', () => {
      it('returns `4`', () => {
        const romanNumber = converter('IV')
        expect(romanNumber.toString()).to.equal('IV')
        expect(romanNumber.toInt()).to.equal(4)
      })
    })
    context('with value `V`', () => {
      it('returns `5`', () => {
        const romanNumber = converter('V')
        expect(romanNumber.toString()).to.equal('V')
        expect(romanNumber.toInt()).to.equal(5)
      })
    })
    context('with value `CDXXIX`', () => {
      it('returns `429`', () => {
        const romanNumber = converter('CDXXIX')
        expect(romanNumber.toString()).to.equal('CDXXIX')
        expect(romanNumber.toInt()).to.equal(429)
      })
    })
    context('with value `MCDLXXXII`', () => {
      it('returns `1482`', () => {
        const romanNumber = converter('MCDLXXXII')
        expect(romanNumber.toString()).to.equal('MCDLXXXII')
        expect(romanNumber.toInt()).to.equal(1482)
      })
    })
    context('with value `MCMLXXX`', () => {
      it('returns `1980`', () => {
        const romanNumber = converter('MCMLXXX')
        expect(romanNumber.toString()).to.equal('MCMLXXX')
        expect(romanNumber.toInt()).to.equal(1980)
      })
    })
  })
  context('with an arabic numeral', () => {
    context('with value `1`', () => {
      it('returns `I`', () => {
        const romanNumber = converter(1)
        expect(romanNumber.toString()).to.equal('I')
        expect(romanNumber.toInt()).to.equal(1)
      })
    })
    context('with value `3`', () => {
      it('returns `III`', () => {
        const romanNumber = converter(3)
        expect(romanNumber.toString()).to.equal('III')
        expect(romanNumber.toInt()).to.equal(3)
      })
    })
    context('with value `4`', () => {
      it('returns `IIII`', () => {
        const romanNumber = converter(4)
        expect(romanNumber.toString()).to.equal('IV')
        expect(romanNumber.toInt()).to.equal(4)
      })
    })
    context('with value `5`', () => {
      it('returns `V`', () => {
        const romanNumber = converter(5)
        expect(romanNumber.toString()).to.equal('V')
        expect(romanNumber.toInt()).to.equal(5)
      })
    })
    context('with value `1968`', () => {
      it('returns `V`', () => {
        const romanNumber = converter(1968)
        expect(romanNumber.toString()).to.equal('MCMLXVIII')
        expect(romanNumber.toInt()).to.equal(1968)
      })
    })
    context('with value `2999`', () => {
      it('returns `V`', () => {
        const romanNumber = converter(2999)
        expect(romanNumber.toString()).to.equal('MMCMXCIX')
        expect(romanNumber.toInt()).to.equal(2999)
      })
    })
    context('with value `3000`', () => {
      it('returns `V`', () => {
        const romanNumber = converter(3000)
        expect(romanNumber.toString()).to.equal('MMM')
        expect(romanNumber.toInt()).to.equal(3000)
      })
    })
  })
})
