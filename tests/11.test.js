const greaterThanTen = require("../src/11")

describe("greaterThanTen", () => {
    it("returns an array of one number when given an array with one number greater than 10", () => {
        expect(greaterThanTen([11])).toEqual([11])
    })

    it("returns an empty array when given an array with the number ten", () => {
        expect(greaterThanTen([10])).toEqual([])
    })

    it("returns an array of multiple values over 10 when given an array with multiple values above and below 10", () => {
        expect(greaterThanTen([0, 55, 13, 10, 2, 420, 69])).toEqual([55, 13, 420, 69])
    })
})