
// Variables for the top 7 movies:
var movie1 = "Inception";
var movie2 = "The Matrix";
var movie3 = "The Dark Knight";
var movie4 = "Gladiator";
var movie5 = "The Shawshank Redemption";
var movie6 = "The Godfather";
var movie7 = "Forrest Gump";

// Array of the top 7 movies:
var movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];
// Prompt the user to enter a number between 1 and 7:
var userInput = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");
//validate user input: check if the input is a number and between 1 and 7 as well as not a number (isNaN), 
// it will cover the cancel button as well
//the while loop will keep running until the user enters a valid number
while (userInput < 1 || userInput > 7 || isNaN(userInput) || userInput === null) {
    alert("Please enter a number between 1 and 7!");
    userInput = prompt("Which top 7 movie would you like?", "Pick a number: 1-7");
}

    // Alert the user with the movie of the number they entered:
    alert("Number " + userInput + " on the list is " + movies[userInput - 1]);
    //loop through the array to display all the movie rankings
    //parseInt(index + 1) to start the list from 1 instead of 0, 
    // without parseInt it considers the index as a string and do concatination
    for (var index = 0; index < movies.length; index++) {
        console.log("Movie:" + " " + parseInt(index + 1) + " " + movies[index]);
     

}


