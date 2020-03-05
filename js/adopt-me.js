
var username = prompt('What is your name?');
var homeTown = prompt('Where are you from?(can be real or fictional)');
// eventualy become a aray pull of random dragon name
function dragonName() {
    var name = prompt('Do you want to change your dragons name?(leave blank if no)');
    if (name === ''){
    var getName = document.getElementById("givenname");
    return dragonName = getName;
    }
}

function dragonGender() {
var gender = prompt('What gender is your new dragon?')
    while (gender !== 'Male' && gender !== 'Female' && gender !== 'Other') {
        var gender = prompt('Please choose Male, Female, Other');
    }
    if (gender === 'Male') {
        return 'Him';
    } else if (gender === 'Female') {
        return 'Her';
    } else {
        return 'It\'s';
    }
}
// need this to get date consisting of day, 
var today = new Date();



/* season takes a random number 0-11 and asigns
a condition of a season baised on 4 groups of numbers.
then should print the apropraite random season
*/

var currentMonth = Math.floor(Math.random()* 10);
var season = function getSeason() {
    if (currentMonth <= 3) {
        return 'in the time of Harthfires';
    } else if (currentMonth > 3 || currentMonth <= 6 ) {
        return 'durring the comming of the Freeze';
    } else if (currentMonth > 6 || currentMonth <= 9) {
        return 'upont the turn of the worlds';
    } else {
        return '';
    }
};

// should take current month do math with age and spit out a dragon age
var ageMod = (currentMonth / 10)*123.45;

//should take age prompt varify that its a number then add it to agemod
function dragonAge(age , ageMod) {
    var age = prompt('How old are you? (used to calculate your dragons age)');
    // while (age !== isNaN) {
    //     age = prompt('Please enter an number!!')
    // }
    if (age === Number){
        return age + ageMod;
    }

}

document.write('<h3 #adopted> I ' + username + 'from ' + homeTown + 'have chosen to addopt this dragon, and herby give ' + dragonGender() + ' the name, ' + dragonName() + 
'. The addoption of this wonderfull creature of ' + dragonAge() + ' occured on ' + today +
season() + ', and was overseen by Huginn </h3>');
