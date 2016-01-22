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
	return objectData.items;
}

var getItemsByBrand = function(items, brand) {
	var brandArray = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].product.brand.toLowerCase() === brand.toLowerCase()) {
			brandArray.push(items[i]);
		}
	}
	return brandArray;
}

var getItemsByAuthor = function(items, author) {
	var authorArray = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].product.author.name.toLowerCase().indexOf(author.toLowerCase()) != -1) {
			authorArray.push(items[i]);
		}
	}
	return authorArray;
}

var getAvailableProducts = function(items) {
	var availableProducts = [];
	for (var i = 0; i < items.length; i++) {
		if (items[i].product.inventories[0].availability === "inStock") {
			availableProducts.push(items[i]);
		}
	}
	return availableProducts;
}

//load products.json
var data = require("./products.json")

//
//USE FUNCTIONS HERE
//
//Question 1
var items = getItems(data);

//Question 2
var sonyItems = getItemsByBrand(items, "Sony");
var canonItems = getItemsByBrand(items, "Canon");
var nikonItems = getItemsByBrand(items, "Nikon");
var panasonicItems = getItemsByBrand(items, "Panasonic");

//Question 3
var targetList = getItemsByAuthor(items, "Target");
var cdwList = getItemsByAuthor(items, "CDW");
var ebayList = getItemsByAuthor(items, "eBay");

//Question 4
var allAvailableProducts = getAvailableProducts(items);


//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

//5.1 - All items made by Sony
console.log(sonyItems);
console.log("\n--------------\n")
//5.2 - All items made by Sony that are available
var availableSony = getAvailableProducts(sonyItems);
console.log(availableSony);
//5.3 - All available items with author "Adorama Camera"
var adoramaItems = getItemsByAuthor(allAvailableProducts, "adorama camera");
console.log(adoramaItems);
//5.4 - nikon items with author ebay
var ebayItems = getItemsByAuthor(nikonItems, "eBay");
console.log(ebayItems);











//Testing
//Question 1
// console.log(items);

//Question 2
/*console.log("\n-----------------\n")
console.log(sonyItems);
console.log("\n-----------------\n")
console.log(canonItems);
console.log("\n-----------------\n")
console.log(nikonItems);
console.log("\n-----------------\n")
console.log(panasonicItems);
console.log("\n-----------------\n")*/

//Question 3
/*console.log(targetList);
console.log("\n-----------------\n")
console.log(cdwList);
console.log("\n-----------------\n")
console.log(ebayList);
console.log("\n-----------------\n")
console.log(targetList.length + cdwList.length + ebayList.length);*/

//Question 4
// console.log(allAvailableProducts);