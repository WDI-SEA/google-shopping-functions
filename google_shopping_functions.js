//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};

//
//DEFINE FUNCTIONS HERE
//





//load products.json
var data = require("./products.json")

//
//USE FUNCTIONS HERE
//






//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

