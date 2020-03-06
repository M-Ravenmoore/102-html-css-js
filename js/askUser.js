
var username;
var homeTown;

function askName(){
    username = prompt('What is you\'r name?');
    
    return document.write('<h4> Welcome ' + username + '</h4>');
}


function tellThem() {
    homeTown = prompt('Where are you from?(can be real or fictional)');

    return document.write('<h5> you have traveled far from ' + homeTown + ' to reach us here at the Hatchery.</h5>');
}

