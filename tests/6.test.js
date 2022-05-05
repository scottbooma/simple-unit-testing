const getCircleAreas = require("../src/6")

describe("getCircleAreas", () => {
    it("returns an array of one number when given an array of one number", () => {
        expect(getCircleAreas([4])).toEqual([50.24])
    })

    it("returns an array of three numbers when given an array of three numbers", () => {
        expect(getCircleAreas([4, 6, 9])).toEqual([50.24, 113.04, 254.34])
    })

    it("returns an empty array when given an empty array", () => {
        expect(getCircleAreas([])).toEqual([])
    })
})