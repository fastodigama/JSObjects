//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//this function will recieve an input from the user 
//to check the temperature and return a boolean value
// if the temperature is too hot or too cold for dog walking
// the function will return false if the temperature is too hot or too cold ie above 30 or below -10
// otherwise it will return true if the temperature is within the range of -10 to 30

function checkTemp(currentTemp){
    if (currentTemp >= 30 || currentTemp <= -10) {
        return false;
    }else {
        return true;
    }
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var userInputTemp = prompt("What is the current temperature?");

if (checkTemp(userInputTemp===false)) {
    alert("Yikes! too hot/too cold for dog walking!.");
}else {
    alert("You’re good, have a nice walk!");
}

