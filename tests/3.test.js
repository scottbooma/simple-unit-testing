const getMentorInfo = require("../src/3")

const mentors = [
    {
        name: "Irina",
        title: "Dr.",
        yearsOfExperience: 10
    }, {
        name: "Ashleigh",
        title: "Dame",
        yearsOfExperience: 20
    }, {
        name: "Etza",
        title: "Professor",
        yearsOfExperience: 30
    }
];

describe("getMentorInfo", () => {
    it("returns a person object with a full name and job title of Junior Developer added", () => {
        expect(getMentorInfo(mentors, "Irina")).toEqual({
            name: "Irina",
            title: "Dr.",
            yearsOfExperience: 10,
            jobTitle: "Junior Developer",
            fullName: "Dr. Irina",
        })
    })
    it("returns a person object with a full name and job title of Senior Developer added", () => {
        expect(getMentorInfo(mentors, "Ashleigh")).toEqual({
            name: "Ashleigh",
            title: "Dame",
            yearsOfExperience: 20,
            jobTitle: "Senior Developer",
            fullName: "Dame Ashleigh",
        })
    })
    it("returns a person object with a full name and job title of Very Senior Developer added", () => {
        expect(getMentorInfo(mentors, "Etza")).toEqual({
            name: "Etza",
            title: "Professor",
            yearsOfExperience: 30,
            jobTitle: "Very Senior Developer",
            fullName: "Professor Etza",
        })
    })
})