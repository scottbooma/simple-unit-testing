const secondTwoSortedValues = require("../src/12")

describe("secondTwoSortedValues", () => {
    it("returns an array of two undefined values when passed an empty array", () => {
        expect(secondTwoSortedValues([])).toEqual([undefined, undefined])
    })

    it("returns an array of the second two smallest numbers when given an array of 3 or more numbers", () => {
        expect(secondTwoSortedValues([4, 6, 1, 8])).toEqual([4, 6])
    })

    it("returns an array with the second two strings in alphabetical order when given an array of 3 or more strings", () => {
        expect(secondTwoSortedValues(["hi", "my", "name", "is", "Scott"])).toEqual(["my", "name"])
    })
})