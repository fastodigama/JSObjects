//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.

function average(num1,num2,num3,num4,num5){
    var result = (num1 + num2 + num3 + num4 + num5) / 5;
    return  result;
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

alert("The average of 5, 10, 15, 20, 25 is " + average(5,10,15,20,25).toFixed(1));

var httP5122 = 90;
var ixD5106 = 80;
var http5121 = 70;
var httP5126 = 85;
var httP5110 = 95;

var courseAverage = average(httP5122,ixD5106,http5121,httP5126,httP5110);

if (courseAverage > 70) {
    
    popUp("success");
}else {
    popUp("Review Required");
}

function popUp(result){
    alert(result);
}



