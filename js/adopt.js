// eventualy become a aray pull of random dragon name
function dragonName() {
    var name = prompt('Do you want to change your dragons name?(leave blank if no)');
    while (name === '' ) {
        return 'Dragon name here'
    }
}

function dragonGender() {
var gender = prompt('What gender is your new dragon?')
    while (gender !== 'Male' || gender !== 'Female' || gender !== 'Other') {
        var gender = prompt('Please choose Male, Female, Other');
    }
    if (gender === 'Male') {
        return 'Him';
    } else {
        return 'Her';
    }
}
// need this to get date consisting of day, month, and year
var today = new Date();



/* season takes a random number 0-11 and asigns
a condition of a season baised on 4 groups of numbers.
then should print the apropraite random season
*/

var currentMonth = Math.floor(math.random()* 10);
function setSeason() {
    if (currentMonth <= 3) {
        return 'spring';
    } else if (currentMonth > 3 || currentMonth <= 6 ) {
        return 'summer';
    } else if (currentMonth > 6 || currentMonth <= 9) {
        return 'fall';
    } else {
        return 'winter';
    }
};

// should take current month do math with age and spit out a dragon age
var ageMod = (currentMonth / 10)*123.45;

//should take age prompt varify that its a number then add it to agemod
function dragonAge(age , ageMod) {
    var age = prompt('How old are you? (used to calculate your dragons age)');
    while (age !== Number) {
        age = prompt('Please enter an number!!')
    }
    if (age === Number){
        return age + ageMod;
    }

}

document.write('<h4 #adopted> I ' + username + 'from ' + homeTown + 'have chosen to addopt this dragon, and herby give ' + dragonGender + ' the name, ' + dragonName + 
'. The addoption of this wonderfull creature of ' + dragonAge + ' occured on ' + today +
' in the season of ' + season + ', and was overseen by Huginn </h4>');
