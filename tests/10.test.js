const removeVowelsForWords = require("../src/10")

describe("removeVowelsForWords", () => {
    it("returns an array with a single word with consonants replaced by underscores when given an array of one word", () => {
        expect(removeVowelsForWords(["book"])).toEqual(["_oo_"])
    })

    it("returns an array of three words with consonants replaced by underscores when given an array of three words", () => {
        expect(removeVowelsForWords(["simple", "unit", "testing"])).toEqual(["_i___e", "u_i_", "_e__i__"])
    })
})