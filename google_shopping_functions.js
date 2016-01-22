//define getItemsCount function
//accepts full item data
//returns the length of the items array

//load products.json
var data = require("./products.json")


var getItemsCount = function(itemData){
	return itemData.items.length;
};



//Create a function called `getItems` that simply returns the items 
//array from the google product object.//
//DEFINE FUNCTIONS HERE
// 

// question 1



var items ;

var getItems = function(objectData) {
	
	return objectData.items;
	
	}

	var items = getItems(data);

	console.log(items);
	console.log(getItems(data));

//question 2




var getItemsByBrand = function (items, brand) {
	var brandItems = [];
	for (i = 0 ; i < items.length ; i++) {
		if (items[i].product.brand === brand) {
			brandItems.push(items[i]);
			}
		
	}
	return brandItems;
}

//question 3//


var getItemsByAuthor = function (items, author) {
	var authorItems = [];
	for (i = 0 ; i < items.length ; i++) {
		if (items[i].product.author.name.toLowerCase().indexOf(author) != -1 ) {
			authorItems.push(items[i]);
			}
		}
		return authorItems;	
}

//question 4//

var getAvailableProducts = function (items) {
	var availabilityItems = []
	for (i=0 ; i < items.length ; i++) {
		if (items[i].product.inventories[0].availability === "inStock" ) {
			availabilityItems.push(items[i]);
		}
	}
	return availabilityItems;
}

//All items made by Sony

console.log (getItemsByBrand(items, "Sony"));

//All items made by Sony that are available.

var brandSony = getItemsByBrand(items,"Sony");

console.log (getAvailableProducts(brandSony));

// All available items by author Adorama Camera

var productsByAuthor = getItemsByAuthor(items,"Adorama Camera");
	console.log(getAvailableProducts(productsByAuthor));

// All items made by Nikon with the author eBay

var productsByBrand = getItemsByBrand(items,"Nikon");
  console.log(getItemsByAuthor(productsByBrand, "ebay"));





//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

