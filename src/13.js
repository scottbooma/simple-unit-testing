function getLargestNumber(array) {
  let largestNumber;
  for (var index = 0; index < array.length - 1; index++) {
    if (array[index] > array[index + 1]) {
      largestNumber = array[index];
    }
  }
  return largestNumber;
}

module.exports = getLargestNumber;
