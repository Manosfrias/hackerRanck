function aVeryBigSum(ar) {
  return ar.reduce((a, b) => {
      return a + b
  });
}

module.exports = { aVeryBigSum };