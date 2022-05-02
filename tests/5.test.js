const compareNumbers = require("../src/5")

describe("compareNumbers", () => {
    it("should exist", () => {
        expect(compareNumbers).toBeDefined();
    });
    it("returns correctly that one number is less than another when given two different numbers", () => {
        expect(compareNumbers(10, 17)).toEqual("10 is smaller than 17");
    });
    it("returns correctly that one number is greater than another when given two different numbers", () => {
        expect(compareNumbers(17, 10)).toEqual("17 is bigger than or equal to 10");
    });
    it("returns correctly that two numbers are equal when given two numbers that are the same", () => {
        expect(compareNumbers(5, 5)).toEqual("5 is bigger than or equal to 5")
    })
})