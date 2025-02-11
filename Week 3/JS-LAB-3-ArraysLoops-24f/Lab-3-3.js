//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var cart = [];
var totalCost = 0;
var threshold = 35;
var inputCost = 0;
var itemCost = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

	//GET ITEM COST FROM USER
	
	
	//CONVERT USER INPUT TO A NUMBER
	
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	
	
	
	//PUSH ITEM COST TO CART ARRAY
	
	

	while (totalCost < threshold) {
		
		inputCost = prompt("Enter the cost of the item: ");
		itemCost = parseInt(inputCost);
		totalCost = totalCost + itemCost;
		cart.push(itemCost);
		console.log("Item prices: " + cart.join("|"));
	}
	
	
		alert("Your shipping for this order will be free!");
		


//SEND POPUP MESSAGE TO USER



//SEND OUTPUT TO CONSOLE
