//define getItemsCount function
//accepts full item data
//returns the length of the items array

//load products.json
var data = require("./products.json")

var getItemsCount = function(itemData){
	return itemData.items.length;
};

// takes in data, gives back data

//
//DEFINE FUNCTIONS HERE
//
var getItems = function(objectData) {
	return objectData.items
};
//Question 1^

var items = getItems(data);

var getItemsByBrand = function(items, brand) {
//not sure of code
};

return; //not sure of the return, it's an array of some sort (or what to test below with console.log)

//Question 2^

var getItemsByAuthor = function(items, author) {
//not sure of code
};

return; //array of sorts

//Question 3^

var getAvailalbeProducts = function(items) {
// not sure
};

return; //array





//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));
console.log('Total Items: '+ getItems(data)); // question 1

console.log(getItemsByBrand(items, "Sony")); //question 5
// for the rest of question five I think that you had to create new variables to print out these lists.


