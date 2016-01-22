//load products.json
var data = require("./products.json")

//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};

var getItems = function(objectData){
	return objectData.items;
}

var items = getItems(data);

var getItemsByBrand = function(items, brand) {
	var brandItems = [];
	for (i = 0; i < items.length; i++) {
		if (items[i].product.brand === brand) {
			brandItems.push(items[i]);
		}
	}
	return brandItems;
}

var getItemsByAuthor = function(items, author) {
	var authorItems = [];
	for (i = 0; i < items.length; i++) {
		if (items[i].product.author.name.toLowerCase().indexOf(author) >=0) {
			authorItems.push(items[i]);
		}
	}
	return authorItems;
}

var getAvailableProducts = function(items) {
	var availableProducts = [];
	for (i = 0; i <items.length; i++) {
		if (items[i].product.inventories[0].availability === "inStock") {
			availableProducts.push(items[i]);
		}
	}
	return availableProducts;
}

//Original function to get appended eBay items. Decided to modify the orig getItemsByAuthor instead.
// var getEbayItems = function(items, author) {
// 	var eBayItems = [];
// 	for (i = 0; i < items.length; i++) {
// 		if (items[i].product.author.name.indexOf(author) >= 0) {
// 			eBayItems.push(items[i]);
// 		}
// 	}
// 	return eBayItems;
// }

var sonyProducts = getItemsByBrand(items, "Sony");
var adoramaProducts = getItemsByAuthor(items, "Adorama Camera");
var nikonProducts = getItemsByBrand(items, "Nikon");

console.log(getItemsByBrand(items, "Sony"));
console.log(getAvailableProducts(sonyProducts));
console.log(getAvailableProducts(adoramaProducts));
console.log(getItemsByAuthor(nikonProducts, "ebay"));

//output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

