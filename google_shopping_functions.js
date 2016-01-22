var data = require("./products.json")
var items = data["items"];

function getItems(objectData) {
	return objectData.items;
}

function getItemsByBrand(items, brand) {
	var brandItems = [];
	for(i = 0; i < items.length; i++) {
		if(items[i].product.brand === brand) {
			brandItems.push(items[i]);
		}
	}
	return brandItems;
}

function getItemsByAuthor(items, author) {
	var authorItems = [];
	for(i = 0; i < items.length; i++) {
		if(items[i].product.author.name.indexOf(author) != -1) {
			authorItems.push(items[i]);
		}
	}
	return authorItems;
}

function getAvailableProducts(items) {
	var itemsAvailable = [];
	for(i = 0; i < items.length; i++) {
		if(items[i].product.inventories[0].availability === "inStock") {
			itemsAvailable.push(items[i]);
		}
	}
	return itemsAvailable;
}

function getBrandAndAuthor (items, brand, author) {
	var matches = [];
	for(i = 0; i < items.length; i++) {
		if(items[i].product.brand === brand && items[i].product.author.name.indexOf(author) != -1) {
			matches.push(items[i]);
		}
	}
	return matches;
}

// Bonus: Finds items based on condition and brand
function getConditionBrand (items, condition, brand) {
	var conditionBrandMatch = [];
	for(i = 0; i < items.length; i++) {
		if(items[i].product.brand === brand && items[i].product.condition === condition) {
			conditionBrandMatch.push(items[i]);
		}
	}
	return conditionBrandMatch;
}

// #1
var items = getItems(data);
console.log(getItems(data));
console.log('````````````````````````````````````')

// #2
var itemsByBrand = getItemsByBrand(items, 'Canon');
console.log(itemsByBrand);
console.log('````````````````````````````````````')

// #3
var itemsByAuthor = getItemsByAuthor(items, 'Target');
console.log(itemsByAuthor);
console.log('````````````````````````````````````')

// #4
var availableProducts = getAvailableProducts(items);
console.log(availableProducts);
console.log('````````````````````````````````````')

// #5
//All Sony Items
var sonyItems = getItemsByBrand(items, 'Sony');
console.log(sonyItems);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// All available Sony Items
var availableSonyItems = getItemsByBrand(availableProducts, 'Sony');
console.log(availableSonyItems);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// All products sold by Adorama Camera
var adoramaCameraItems = getItemsByAuthor(items, 'Adorama Camera');
console.log(adoramaCameraItems);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// All items made by Nikon with the author eBay
var brandAuthorMatch = getBrandAndAuthor(items, 'Nikon', 'eBay');
console.log(brandAuthorMatch);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Bonus
var conditionBrandMatch= getConditionBrand(items, 'new', 'Canon');
console.log(conditionBrandMatch);
console.log("````````````````````````````````");


/*
**** Code Provided ****
//output item count using the getItemsCount function
var getItemsCount = function(itemData){
return itemData.items.length;
};
console.log('Item Count: ' + getItemsCount(data));
*/