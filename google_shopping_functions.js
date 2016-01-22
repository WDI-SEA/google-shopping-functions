
var getItemsCount = function(itemData){
	for(items in itemsData){

	}
	return itemData.items.length;

};
var getItems = function(ObjectData) {
	return ObjectData.items;
}


var getItemsByBrand = function (items, brand){
	var itemsArray= []
	for(var i=0; i < items.length; i++){
		if (items[i].product.brand === brand){
			itemsArray.push(items[i])
		}
	}
	return itemsArray;
}



var getItemsCount = function(ObjectData) {
	return ObjectData.items
}




// var data = require("./products.json")

// var itemsArray=getItems(data);




// console.log('Item Count: ' + getItemsCount(data));

// console.log(getItemsByBrand(itemsArray,"Canon"))


var getItemsByAuthor = function (items, author){
	var itemsArray= []
	for(var i=0; i < items.length; i++){
		if (items[i].product.author.name === author){
			itemsArray.push(items[i])
		}
	}
	return itemsArray;
}

var getAvailableProducts = function (items,inventories){
	var itemsArray=[]
	for(var i=0; i < items.length; i++){
		if (items[i].product.inventories[0].availability===inventories){
			itemsArray.push(items[i])
		}
 }
 	return itemsArray;
}


var data = require("./products.json")
var items = getItems(data);
getItemsByBrand(items,"Sony")
console.log(getItemsByBrand(items,"Sony"))
console.log(getAvailableProducts(getItemsByBrand(items,"Sony"),"inStock"))
console.log(getItemsByAuthor(getAvailableProducts(items,"inStock"),"Adorama Camera"))
console.log(getItemsByAuthor(getItemsByBrand(items,"Nikon"),"eBay"))
//console.log('Item Count: ' + getItemsCount(data));

// console.log(getItemsByBrand(itemsArray,"Canon"))
//console.log(getItemsByAuthor(itemsArray,"Target"))
//console.log(getAvailableProducts(itemsArray,"inStock"))

