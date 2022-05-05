const getCircleArea = require("../src/7")

describe("getCircleArea", () => {
    it("returns a number when given a number", () => {
        expect(getCircleArea(4)).toEqual(50.26548245743669)
    })

    it("returns zero when given zero", () => {
        expect(getCircleArea(0)).toEqual(0)
    })
})