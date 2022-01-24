// Console log name in all uppercase
let fullName = "Eric Kendrick";
let uppercaseName = fullName.toUpperCase();

//Create experience array to pass to displayPosition
let jobOne = ["SDI, Inc.", "Simulator Technician", "Provided hardware and software simulator technical support to the Army Unmanned Aircraft Systems schoolhouse"];
let jobTwo = ["20th Special Forces Group (Airborne)", "Unmanned Systems Instructor", "Managed flight operations and training of 27-member UAS unit, go-to expert on random/ useless trivia"];;
let jobThree = ["Dynetics, Inc.", "Subject Matter Expert/ Logistics Analyst", "Provided SME knowledge and guidance to the Army UAS Project Office, led software fleet integration efforts, tested new software"];

//Create skills objects with a name and boolean value of 'isCool' to add 'BAM:' for the displaySkill
let skillArray = [
    {
    name: "JavaScript",
    isCool: false
}
]
let skillOne = {
    name: "javaScript",
    isCool: false
}
let skillTwo = {
    name: "jQuery",
     isCool: false
}
let skillThree = {
    name: "Team Building",
    isCool: false
}
let skillFour = {
    name: "Mandolin",
    isCool: true
}
let skillFive = {
    name: "I can eat a hotdog underwater",
    isCool: true
}

//displayFunction displays parameters within the guidelines of the exercise
// Asterisk + company + job title + job description with correct punctuation
function displayPosition (compName, title, description) {
    console.log("* " + compName + ", " + title + " - " + description +".")
}
function displaySkill (skill){
    if (skill.isCool === true){
        console.log("*" +" BAM: " + skill.name);
    }
    else {
        console.log("* " + skill.name);
    }
}

console.log("Name: " + uppercaseName);
console.log("Career: Junior Software Engineer");
console.log("Description: 5'9/ 175 lbs./ Beard/ Probably wearing flannel/ Perp last seen in East Avondale - Crestwood North area of Birmingham");
console.log("");
console.log("My Interests:");
console.log("* Full-Contact Origami");
console.log("* Horses");
console.log("* People");
console.log("* Horse People (Centaurs)");
console.log("");
console.log("My Previous Experience:")
displayPosition(jobOne[0], jobOne[1], jobOne[2]);
displayPosition(jobTwo[0], jobTwo[1], jobTwo[2]);
displayPosition(jobThree[0], jobThree[1], jobThree[2]);
console.log("");
console.log("My Skills:");
displaySkill(skillOne);
displaySkill(skillFive);
displaySkill(skillTwo);
displaySkill(skillThree);
displaySkill(skillFour);



