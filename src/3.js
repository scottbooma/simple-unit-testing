function getMentorInfo(mentors, name) {
    let result;
    result = mentors.find(function (person) {
        return person.name === name;
    });

    let mentorTitle = 'Junior Developer';

    if (result.yearsOfExperience > 10 && result.yearsOfExperience <= 20) {
        mentorTitle = 'Senior Developer';
    } else if (result.yearsOfExperience > 20) {
        mentorTitle = 'Very Senior Developer';
    }

    result.jobTitle = mentorTitle;
    result.fullName = `${result.title} ${result.name}`;

    return result;
}

module.exports = getMentorInfo