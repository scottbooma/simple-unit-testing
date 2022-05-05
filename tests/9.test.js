const removeVowels = require("../src/9")

describe("removeVowels", () => {
    it("returns a string of 2 vowels and 2 underscores when given a word that contains 2 vowels and 2 consonants", () => {
        expect(removeVowels("book")).toEqual("_oo_")
    })

    it("returns a string of only underscores when given a word with no vowels", () => {
        expect(removeVowels("pygmy")).toEqual("_____")
    })

    it("returns the same string when given a word with only vowels", () => {
        expect(removeVowels("uoiauai")).toEqual("uoiauai")
    })
})