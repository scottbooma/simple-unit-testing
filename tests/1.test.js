const checkFive = require("../src/1")

describe("checkFive", () => {
    it("returns a string saying a number is less than 5 when given a number less than 5", () => {
        expect(checkFive(1)).toEqual("1 is less than 5.")
    })

    it("returns a string saying a number is equal to 5 when given 5", () => {
        expect(checkFive(5)).toEqual("5 is equal to 5.")
    })

    it("returns a string saying a number is greater than 5 when given a number greater than 5", () => {
        expect(checkFive(6)).toEqual("6 is greater than 5.")
    })
})