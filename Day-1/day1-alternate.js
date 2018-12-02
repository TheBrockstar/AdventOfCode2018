let findFirstDouble = (string) => {
  let array = string.split('\n');
  array = array.map(item => Number(item));
  const length = array.length;
  const lastSums = {};
  let currentSum = array[0];
  let found = false;
  let i = 1; 

  while (!found){
      if (i === length) {
        i = 0
      }
      currentSum = currentSum + array[i];
      // console.log("object: ", lastSums,"\nsum: ", currentSum);
      if (lastSums[`${currentSum}`] || lastSums[`${currentSum}`] === 0) {
        return currentSum;
      }
      lastSums[`${currentSum}`] = 0;
    ++i;
  }
    return currentSum;
}

module.exports = {findFirstDouble};