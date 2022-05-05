const greetPeople = require("../src/8")

describe("greetPeople", () => {
    it("returns a singular greeting string when given a singluar person array", () => {
        expect(greetPeople(["Scott"])).toEqual("Hello Scott")
    })

    it("returns a greeting string with 3 names when given an array of 3 people", () => {
        expect(greetPeople(["Scott", "Stephanie", "Lily"])).toEqual("Hello ScottStephanieLily")
    })

    it("returns a string of Hello when given an empty array", () => {
        expect(greetPeople([])).toEqual("Hello ")
    })
})