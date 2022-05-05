const getLargestNumber = require("../src/13")

describe("getLargestNumber", () => {
    it("returns undefined when given an empty array", () => {
        expect(getLargestNumber([])).toEqual(undefined)
    })

    it("returns the largest number when given an array of multiple numbers", () => {
        expect(getLargestNumber([1, 5, 4, 9, 7])).toEqual(9)
    })

    it("returns undefined when given an array with one number", () => {
        expect(getLargestNumber([69])).toEqual(undefined)
    })
})