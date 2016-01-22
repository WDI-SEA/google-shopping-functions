//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};


//
//DEFINE FUNCTIONS HERE
//
var getItems = function(objectData) {
	return objectData.items
}

var getItemsByBrand = function(items, brand) {
	var objectBrands = [];
	for (var i=0; i < items.length; i++) {
		if(items[i].product.brand == brand)
			objectBrands.push(items[i])
	} return objectBrands
}
var getItemsByAuthor = function(items, author) {
	var objectAuthors = [];
	for (var i=0; i < items.length; i++) {
		if(items[i].product.author.name.toLowerCase().indexOf(author.toLowerCase()) != -1) {
			objectAuthors.push(items[i])
		}
	} return objectAuthors
}
var getAvailableItems = function(items) {
	var objectAvail = [];
	for (var i=0; i < items.length; i++) {
		if(items[i].product.inventories[0].availability == "inStock")
			objectAvail.push(items[i])
	} return objectAvail
}


//load products.json
var data = require("./products.json")

//
//USE FUNCTIONS HERE
//
var items = getItems(data)
//console.log(getItems(data)); //alternative to code just below
// var items = getItems(items);

// All items made by Sony
var itemsByBrand = getItemsByBrand(items, 'Sony');
// console.log(itemsByBrand);

console.log("---------------break--------------")

//not sure how to get below to work for combined functions
// var availSony = getItemsByBrand(items, 'Sony') && getAvailableItems(items);
// console.log(availSony);



var availItemsbyBrand = getAvailableItems(itemsByBrand);
// console.log(availItemsbyBrand);

var itemsByAuthor = getItemsByAuthor(items, "Adorama Camera");
console.log(itemsByAuthor);

console.log("---------------break--------------")

var availItemsbyAuthor = getAvailableItems(itemsByAuthor);
console.log(availItemsbyAuthor);




//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

