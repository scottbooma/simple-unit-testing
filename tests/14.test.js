const getEven = require("../src/14")

describe("getEven", () => {
    it("returns an empty array when given an empty array", () => {
        expect(getEven([])).toEqual([])
    })

    it("returns an empty array when given an array filled with odd numbers", () => {
        expect(getEven([1, 3, 5])).toEqual([])
    })

    it("returns an array of only even numbers when given an array of mixed numbers", () => {
        expect(getEven([3, 6, 7, 4, 8, 0])).toEqual([6, 4, 8, 0])
    })
})