function checkFive(num) {
  if (num < 5) {
    return num + " is less than 5.";
  } else if (num === 5) {
    return num + " is equal to 5.";
  } else {
    return num + " is greater than 5.";
  }
}

module.exports = checkFive
