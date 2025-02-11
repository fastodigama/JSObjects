
//Required variables definition 

var inputFromUser;
var userFistName;


// prompt the user for their team number

inputFromUser = prompt("what is your team Number?",0);

// check if the user input is between 1 and 6 
//the following if statement will handle the empty input and the input that is not a number beacuse it accept only numbers between 1 and 6
if (inputFromUser >= 1 && inputFromUser <= 6) {
    userFistName = prompt("What is your First name?","First Name");

    // switch statement to check the user first name and display the welcome message
    switch (userFistName) {
        case "Fadel":
            alert("Welcome to the team" + " " + userFistName + " " + "Matar");
            break;
        case "Sean":
            alert("Welcome to the team" + " " + userFistName + " " + "Doyle");
            break;
        case "Matthew":
            alert("Welcome to the team" + " " + userFistName + " " + "Bebis");
            break;
        case "Bernard":
            alert("Welcome to the team" + " " + userFistName + " " + "Monette");
            break;
            // if the user first name is not in the list it will display the following default message:
        default:
            alert("Access Denied");

    } 
//if the user hits the cancel button it will display the following message:
}else if (inputFromUser === null) {
    alert("Thank you for visiting our page");
    //if the user input is not between 1 and 6 OR input a string it will display the following message:
}else { 
    alert("Access Denied");
}

