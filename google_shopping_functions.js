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
	var brandList = [];
	for (var x = 0; x < items.length; x++) {
		if (items[x].product.brand.toLowerCase() === brand.toLowerCase()) {
			brandList.push(items[x]);
		}
	}
	return brandList;
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
var items = getItems(data);
var sonyP = getItemsByBrand(items, 'Sony');
var canonP = getItemsByBrand(items, 'Canon');
var nikonP = getItemsByBrand(items, 'Nikon');
var panaP = getItemsByBrand(items, 'Panasonic');
var target = getItemsByAuthor(items, 'Target');
var cdw = getItemsByAuthor(items, 'CDW');
var ebay = getItemsByAuthor(items, 'eBay');
var adoramaCamera = getItemsByAuthor(items, 'Adorama Camera');
var allAvailableP = getAvailableProducts(items);
console.log('-------------------------------------------');
console.log("All Sony items:")
// console.log(sonyP);
// console.log(canonP);
// console.log(nikonP);
// console.log(panaP);
console.log('-------------------------------------------');
// console.log(target);
// console.log(cdw);
// console.log(ebay);
// console.log(adoramaCamera);
// console.log('-------------------------------------------');
// console.log(allAvailableP);
console.log("All available Sony items:");
console.log(getAvailableProducts(sonyP));
console.log('-------------------------------------------');
console.log("All items from Adorama Camera:");
var adoramaItems = getItemsByAuthor(allAvailableP, "adorama");
console.log(adoramaItems);
console.log('-------------------------------------------');
console.log("All Nikon items from eBay:");
var nikonEbay = getItemsByAuthor(nikonP, "eBay");
console.log(nikonEbay);
console.log('-------------------------------------------');

//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

