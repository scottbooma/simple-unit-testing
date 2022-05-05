function getCircleArea(radius) {
  return 3.14 * radius ** 2
}

function getCircleAreas(radiusArr) {
  return radiusArr.map(radius => {
    return getCircleArea(radius)
  })
}

module.exports = getCircleAreas
