
var username = prompt('What is your name?');
var homeTown = prompt('Where are you from?(can be real or fictional)');

// arrays

let givenName = ['henery', 'George', 'Loki']


function dragonName() {
    var name = prompt('What is the dragons Name (you can change it)');
        for (i = 0; i === "" || i >= dragonName.length; i++){
        return prompt('Enter a Name Please')
        };
}

// Prompts for gender then returns proper speach for the document
function dragonGender() {
    var gender = prompt('What gender is your new dragon?')
    while (gender !== 'Male' && gender !== 'Female' && gender !== '') {
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
// Getting adoption date, 

var today = new Date();


// creates random num 1-12 assigns a season
var currentMonth = Math.ceil(Math.random()* 12);
var season = function getSeason() {
    if (currentMonth <= 3) {
        return 'in the time of Harthfires';
    } else if (currentMonth > 3 || currentMonth <= 6 ) {
        return 'durring the comming of the Freeze';
    } else if (currentMonth > 6 || currentMonth <= 9) {
        return 'upont the turn of the worlds';
    } else {
        return 'Then endtimes';
    }
};
// takes random num again and creates fictional age
function dragonAge(age , ageMod) {
    var ageMod = Math.ceil((currentMonth / 10)*123.45);
    var age = prompt('How old are you? (used to calculate your dragons age)');
    var parseAge = parseInt(age);
    return parseAge + ageMod;
};

document.write('<h4> I ' + username + ' from ' + homeTown + ' have chosen to addopt this dragon, and herby give ' + dragonGender() + 
' the name, ' + dragonName() + '. The addoption of this wonderfull creature of ' + dragonAge() + ' years old, occured on ' + today +
season() + ', and was overseen by Huginn </h4>');
