//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};



//Create a function called `getItems` that simply returns the items 
//array from the google product object.//
//DEFINE FUNCTIONS HERE
// 

// question 1

var getItems = function(objectData) {

	return objectData.items
	}

}

console.log(getItems(data));

//question 2


var items = getItems(data) {
	console.log(items);
}


var getItemsByBrand = function (items, brand) {
	for (i = 0, i < data.items.length, i++) {
		if items[i].product.brand === brand {
			brandItems.push();
			}
		
		return brandItems;
	}
	
var brandItems = [];


//question 3//

var getItemsByAuthor = function (items, author) {
	for (i = 0, i < data.items.length, i++) {
		if items[i].product.author === author {
			authorItems.push();
			}
		}
		
		return authorItems;

	var authorItems [];
}

//question 4//

var getAvailableProducts = function (items) {
	for (i=0, i < data.items.length, i++) {
		if items.[i].product.inventories[0].availability === "inStock" {
			availabilityItems.push();
		}
	}

	return availabilityItems;

	var availabilityItems [];

}

}



//load products.json
var data = require("./products.json")

//
//USE FUNCTIONS HERE
//

//All items made by Sony

console.log (getItemsByBrand(items, "Sony"));

//All items made by Sony that are available.

var brandSony = getItemsByBrand(items,"Sony");

console.log (getAvailableProducts(brandSony));

// All available items by author Adorama Camera

var adoramaProducts = getItemsByAuthor(items,"Adorama Camera");
	console.log(getAvailableProducts(adoramaProducts));

// All items made by Nikon with the author eBay

var madeByNikon = getItemsByBrand(items,"Nikon");
  console.log(getItemsByAuthor(madeByNikon));





//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

