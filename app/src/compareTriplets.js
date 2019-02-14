function compareTriplets(a, b) {
  let aCounter = 0;
  let bCounter = 0;
  for (let i = 0; i < a.length; i++) {
    if(a[i] > b[i]){
      aCounter = aCounter + 1;
    } else if(a[i] < b[i]) {
      bCounter = bCounter + 1;
    }
  }

  const result = [aCounter, bCounter]
  return result;
}

module.exports = { compareTriplets };