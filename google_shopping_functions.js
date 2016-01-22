var getItemsCount = function(itemData){
	return itemData.length;
};
var getItems = function(objectData) {
	return objectData.items
}
var data = require("./products.json")

console.log("Question 1: ***************************")

var getItemsByBrand = function(items, brand) {
	var brandArray = [];
	for (var i = 0; i < items.length; i++){
		if(items[i].product.brand === brand){
			brandArray.push(items[i]);
		}
	}
	return brandArray
}

var itemsByBrand = getItemsByBrand(getItems(data), 'Panasonic')
console.log(itemsByBrand);

console.log("Question 2: ***************************")

var getItemsByAuthor = function(items, authorName) {
	var authorArray = [];
	for (var i = 0; i < items.length; i++){
		if(items[i].product.author.name.toLowerCase().indexOf(authorName) === authorName){
			authorArray.push(items[i]);
		}
	}
	return authorArray
}

var itemsByAuthor = getItemsByAuthor(getItems(data),'Target')
console.log(itemsByAuthor);

console.log("Question 3: ***************************")

var getAvailableProducts = function(items){
	var itemsArray = [];
	for(i = 0; i < items.length; i++){
		if(items[i].product.inventories[0].availability == "inStock"){
			itemsArray.push(items[i]);
		}
	}
	return itemsArray
}

console.log(getAvailableProducts(data.items))

console.log("Question 4: ***************************")


console.log(getItemsByBrand(data.items,'Sony'));

console.log(getAvailableProducts(getItemsByBrand(data.items,'Sony')));

console.log(getItemsByBrand(getItemsByAuthor(data.items,'Adorama Camera')));

console.log(getItemsCount(getItemsByBrand(data.items,'Nikon',getItemsByAuthor(data.items,'Ebay'))));


console.log("Question 5: ***************************")



























