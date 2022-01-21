// Console log name in all uppercase
let fullName = "Eric Kendrick";
let uppercaseName = fullName.toUpperCase();

//Create experience variables to pass to displayPosition
let firstComp = "SDI, Inc.";
let secComp = "20th Special Forces Group (Airborne)";
let thirdComp = "Dynetics, Inc.";

//Create position variables to pass to displayPosition
let firstTitle = "Simulator Technician";
let secTitle = "Unmanned Systems Instructor";
let thirdTitle = "Subject Matter Expert/ Logistics Analyst";

//Create job descriptions to pass to displayPosition
let firstDesc = "Provided hardware and software simulator technical support to the Army Unmanned Aircraft Systems schoolhouse"
let secDesc = "Managed flight operations and training of 27-member UAS unit, go-to expert on random/ useless trivia"
let thirdDesc = "Provided SME knowledge and guidance to the Army UAS Project Office, led software fleet integration efforts, tested new software"

//displayFunction displays parameters within the guidelines of the exercise
// Asterisk + company + job title + job description with correct punctuation
function displayPosition (compName, title, description) {
    console.log("* " + compName + ", " + title + " - " + description +".")
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
displayPosition(firstComp, firstTitle, firstDesc);
displayPosition(secComp, secTitle, secDesc);
displayPosition(thirdComp, thirdTitle, thirdDesc);


