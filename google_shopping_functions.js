//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};



//
//DEFINE FUNCTIONS HERE
//

var getItems = function(objectData){
	return objectData.items
}

var getItemsByBrand = function(items,brand){
	var brands = [];
	for(var i =0; i < items.length; i++){
		if(items[i].product.brand == brand)
			brands.push(items[i])
	}
	return  brands
}

var getItemsByAuthor = function(items,author){
	var authors = [];
	for(var i =0; i < items.length; i++){
		if(items[i].product.author.name == author)
			authors.push(items[i])
	}
	return authors
}

var getAvailableProducts = function(items){
	var availableItems = [];
	for(var i =0; i < items.length; i++){
		if(items[i].product.inventories[0].availability == "inStock")
			availableItems.push(items[i])
	}
	return availableItems
}

//load products.json
var data = require("./products.json")
var items = getItems(data)
//
//USE FUNCTIONS HERE
//
// console.log(getItems(data));

var itemsByBrand = getItemsByBrand(items, 'Sony');

var arrayBrands = getItemsByBrand(items, 'Sony');
console.log(arrayBrands);

var arrayAuthor = getItemsByAuthor(items, 'eBay');
console.log(arrayAuthor);

var arrayAvailability = getAvailableProducts(items);
console.log(arrayAvailability);

var functionOne = getItemsByBrand(items, 'Sony');
console.log(functionOne);

var functionTwo = getAvailableProducts(functionOne);
console.log(functionTwo);

var functionThree = getItemsByAuthor(items, "Adorama Camera");
// console.log(getItemsByAuthor(getAvailableProducts(items), "eBay"));
var functionFour = getAvailableProducts(functionThree);
console.log(getAvailableProducts(functionThree));

var functionFive = getItemsByBrand(items, 'Nikon');
console.log(functionFive);
var functionSix = getItemsByAuthor(functionFive, "eBay")
console.log(functionFive);



// var functionThree = getItemsByAuthor(functionTwo, "Adorama Camera");


//output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(data));

