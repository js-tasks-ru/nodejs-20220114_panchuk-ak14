function sum(a, b) {
  const isNum = n => typeof n === 'number'
  if (isNum(a) && isNum(b)) return a + b
  throw new TypeError('Arguments are not a numbers')
}

module.exports = sum;
