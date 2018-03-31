const chai = require('chai')
chai.config.includeStack = true
chai.use(require('dirty-chai'))
global.expect = chai.expect
