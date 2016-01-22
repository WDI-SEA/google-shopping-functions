//define getItemsCount function
//accepts full item data
//returns the length of the items array


var getItemsCount = function(itemData){
	return itemData.items.length;
};


var getItems = function(objectData){
	return objectData.items;
}

//2.)
var getItemsByBrand = function(item, brand){
	var arrayBrand = [];
	for (i = 0; i < item.length; i++) {
		if(item[i].product.brand === brand) {
			arrayBrand.push(item[i]);
		}
	}
	return arrayBrand;
}

//3.)
var getItemsByAuthor = function(item, author){
	var arrayAuthor = [];
	for (i = 0; i < item.length; i++) {
		if(item[i].product.author.name.indexOf(author) != -1) {
			arrayAuthor.push(item[i]);
		}
	}
	return arrayAuthor;
}


//4.)
var getAvailableItems = function(item) {
	var arrayAvailable = [];
	for (i = 0; i < item.length; i++) {
		if(item[i].product.inventories[0].availability === "inStock") {
			arrayAvailable.push(item[i]);
		}
	}
	return arrayAvailable;
}


//load products.json
var data = require("./products.json")
var dataItems = getItems(data);


//USE FUNCTIONS HERE

var sonyItems = getItemsByBrand(dataItems, "Sony");
var sonyAvailable = getAvailableItems(sonyItems);
var adoramaAuthor = getItemsByAuthor(dataItems, "Adorama Camera");
var nikonAvailable = getAvailableItems(getItemsByBrand(dataItems, "Nikon"));


//output item count using the getItemsCount function
//5.)
console.log('Item Count: ' + getItemsCount(data));
console.log('------------');
console.log(sonyItems);
console.log('------------');
console.log(sonyAvailable);
console.log('------------');
console.log(adoramaAuthor);
console.log('------------');
console.log(nikonAvailable);



