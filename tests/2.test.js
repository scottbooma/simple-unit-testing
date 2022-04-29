const whoWon = require("../src/2")

describe("whoWon", () => {
    it("returns in a tie when given two of the same values", () => {
        expect(whoWon(1, 1)).toEqual("TIE!")
    })

    it("returns player 2 wins when the first value is rock and the second is paper", () => {
        expect(whoWon("rock", "paper")).toEqual("Player 2 wins!")
    })

    it("returns player 2 wins when the first value is paper and the second is scissors", () => {
        expect(whoWon("paper", "scissors")).toEqual("Player 2 wins!")
    })

    it("returns player 2 wins when the first value is scissors and the second is rock", () => {
        expect(whoWon("scissors", "rock")).toEqual("Player 2 wins!")
    })

    it("returns player 1 winning when the values are literally anything else that do not match", () => {
        expect(whoWon("car", true)).toEqual("Player 1 wins!")
    })
})