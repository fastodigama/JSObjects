//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    name: "Fadel",
    age: 43,
    Status: "Separated",
    Occupation: "Web Developer",
    function: function(){

        console.log(meObject.Status);
        alert("My Name is " + meObject.name + " and I am a " + meObject.Occupation);

    }

}

meObject.function();


var bankCustomer = {
    lastName: "Alfonso",
    branchNumber: "Alejandro",
    accountBalance: 500.25,
    interestRate: 1.03,
    makeDeposit: function(dipositAmount){

        bankCustomer.accountBalance += dipositAmount;
        return "Thank you, your current balance is now $" + (bankCustomer.accountBalance).toFixed(2);
        

    },
    makeWithdrawal: function(withdrawalAmount){

        bankCustomer.accountBalance -= withdrawalAmount;

        return "Thank you, your current balance is now $" + (bankCustomer.accountBalance).toFixed(2);
        

    },
    addInterest: function(){

        
        if (bankCustomer.multipleAccounts === true){
            var tempInterestRate = bankCustomer.interestRate + 0.005;
            bankCustomer.accountBalance *= tempInterestRate
            return "Thank you, your current balance is now $" + (bankCustomer.accountBalance).toFixed(2);
        } else {    
            bankCustomer.accountBalance *= bankCustomer.interestRate;
        return "Thank you, your current balance is now $" + (bankCustomer.accountBalance).toFixed(2);
        }
    },
    multipleAccounts: true
}

console.log(bankCustomer.accountBalance);
console.log(bankCustomer.makeDeposit(200));
console.log(bankCustomer.makeWithdrawal(75));
console.log(bankCustomer.addInterest());





