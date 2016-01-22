//define getItemsCount function
//accepts full item data
//returns the length of the items array
var data = require("./products.json")

var getItemsCount = function(itemData){
	for(items in itemData){

	}
	return itemData.items.length;
};

//1. Get Items

var getItems = function(objectData){
		return objectData.items;
}

var itemsArray = getItems(data);

//2.  Search Items by Brand

var getItemsByBrand = function(items, brand){
	var matchedItems = [];
	for(var i = 0; i < items.length; i++){
		if(items[i].product.brand === brand){
			matchedItems.push(items[i]);
		}
	}
	return matchedItems;
}

//3.  Search items by Author

var getItemsByAuthor = function(items, author){
	var matchedItems = [];
	for(var i = 0; i < items.length; i++){
		if(items[i].product.author.name.toLowerCase().indexOf(author) != -1){
			matchedItems.push(items[i]);
		}
	}
	return matchedItems;
}

//4.  Search items by availability

var getItemsByAvailability = function(items){
	var matchedItems = [];
	for(var i = 0; i < items.length; i++){
		if(items[i].product.inventories[0].availability === "inStock"){
			matchedItems.push(items[i]);
		}
	}
	return matchedItems;
}

//load products.json

// console.log(getItems(data));
//output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));
// console.log(getItemsByBrand(itemsArray, "Sony"));
// console.log(getItemsByAuthor(itemsArray, "Target"));
// console.log(getItemsByAvailability(itemsArray));


//5.1 All Items By Sony
console.log(getItemsByBrand(itemsArray, "Sony"));
//5.2 All items made by Sony that are available
var matchedByBrandArray = getItemsByBrand(itemsArray, "Sony");
console.log(getItemsByAvailability(matchedByBrandArray));
//5.3 All available items by the author "Adorama Camera"
matchedByBrandArray = getItemsByBrand(itemsArray, "Adorama Camera")
console.log(getItemsByAvailability(itemsArray));
//5.4 All items made by Nikon with the author eBay
var matchedByAuthorArray = getItemsByAuthor(itemsArray, "ebay");
console.log(getItemsByBrand(matchedByAuthorArray, "Nikon"));





