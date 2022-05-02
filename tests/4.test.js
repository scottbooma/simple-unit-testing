const myFunction = require("../src/4")

describe("myFunction", () => {
    it("returns a gross income and net income when given a salary, income taxes, and a tax code of 1150L", () => {
        expect(myFunction(50000, "1150L", 2000, 3000)).toEqual("Your gross income is £50000 and your net income is £37099.75.")
    })

    it("returns a gross income and net income when given a salary, income taxes, and a tax code of ST", () => {
        expect(myFunction(50000, "ST", 2000, 3000)).toEqual("Your gross income is £50000 and your net income is £39599.75.")
    })

    it("returns a gross income and net income when given a salary, income taxes, and a tax code that is not ST or 1150L", () => {
        expect(myFunction(50000, "somethingElse", 2000, 3000)).toEqual("Your gross income is £50000 and your net income is £38099.75.")
    })
})