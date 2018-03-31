const helper = module.exports = {}

helper.isString = (value) => {
  return (typeof value === 'string' || value instanceof String)
}

helper.isNumber = (value) => {
  return typeof value === 'number' && isFinite(value)
}
