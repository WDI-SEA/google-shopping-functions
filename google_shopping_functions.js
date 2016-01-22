//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};

//
//DEFINE FUNCTIONS HERE
var getItems = function (objectData){
	return objectData.items
};
var getItemsByBrand = function(items, brandName){
	var itemArray = [];
	for (var i = 0; i < items.length; i++){
		if (items[i].product.brand.toLowerCase() === brandName.toLowerCase()){
			itemArray.push(items[i]);
		}
	}
	return itemArray;
};

var getItemsByAuthor = function(items, authorName){
	var itemArray = [];
	for (var i = 0; i < items.length; i++){
		if (items[i].product.author.name.toLowerCase().indexOf(authorName.toLowerCase()) !== -1) {
			itemArray.push(items[i]);
		}
	}
	return itemArray;
};

var getAvailableProducts = function(items){
	var itemArray = [];
	for (var i = 0; i < items.length; i++){
		if (items[i].product.inventories[0].availability === 'inStock'){
			itemArray.push(items[i]);
}
}
	return itemArray;
	};




//load products.json
var data = require("./products.json")

//
//USE FUNCTIONS HERE
var items = getItems(data);
//console.log(items);
var itemBrandSony = getItemsByBrand(items, 'Sony');
//console.log(itemBrandSony);
var itemAvailableSony = getAvailableProducts(itemBrandSony);
var itemsAvailable = getAvailableProducts(items);
console.log(itemsAvailable);
var itemsAvailableAdorama = getItemsByAuthor(itemsAvailable, "Adorama Camera");
console.log(itemsAvailableAdorama);
var itemEbay = getItemsByAuthor(items, "ebay");
console.log(itemEbay);
var itemNikonEbay = getItemsByBrand (itemEbay, "Nikon");
console.log(itemNikonEbay);





//output item count using the getItemsCount function
//console.log('Item Count: ' + getItemsCount(data));

