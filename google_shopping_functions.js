var data = require("./products.json")


//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};

// Question 1
var getItems = function(objectData) {
	return objectData.items;
}


console.log(getItems(data));

//Question 2

var items = getItems(data); 
var getItemsbyBrand = function(items, brand) {
	var brandItems = [];
	for (var i = 0; i < data["items"].length; i++ ) {
	if (data["items"][i].product.brand === brand) {
		brandItems.push(items[i]); 
	}
}
	return brandItems;
}


// 

// var itemsByBrand = getItemsbyBrand(items, 'Nikon');
// console.log(itemsByBrand);

//Question 3

var items = getItems(data);
var getItemsByAuthor = function(items, author) {
	var authorItems = [];
	for (var i = 0; i < data["items"].length; i++ ) {
	if (data["items"][i].product.author.name.indexOf(author) !=-1) {
		authorItems.push(items[i]);
	}	
	}

	return authorItems;
}


// console.log(getItemsByAuthor(items, "eBay"));


//Question 4

var items = getItems(data);
var getAvailableProducts = function(items, availability) {
	var availItems = [];
	for (var i = 0; i < items.length; i++ ) {
	if (data["items"][i].product.inventories[0].availability === "inStock") {
		availItems.push(items[i]);
	}
}

	return availItems;

}
// console.log(getAvailableProducts(items, "inStock"));


//Question 5

console.log(getItemsbyBrand(items, 'Sony'));
console.log(getAvailableProducts(getItemsbyBrand(items, 'Sony')));
console.log(getAvailableProducts(getItemsByAuthor(items, 'Adorama Camera')));
console.log(getItemsbyBrand(getItemsByAuthor(items, 'eBay')));



//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));


