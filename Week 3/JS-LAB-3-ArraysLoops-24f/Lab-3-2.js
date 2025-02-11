//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var ourTeam = ["Joud","Ibrahim","Ghazal","Yousef ", "Adam"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(ourTeam);


//REMOVE LAST MEMBER
ourTeam.pop();

//ADD SEAN TO FRONT OF ARRAY
ourTeam.unshift("Sean");

//REARRANGE THE ARRAY ALPHABETICALLY
ourTeam.sort();


//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log(ourTeam);
console.log("TWe have  " + ourTeam.length + " people in our group");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for ( var i = 0; i < ourTeam.length; i++) {
  
    console.log(ourTeam[i] + " is NUM " + (i+1));
}
