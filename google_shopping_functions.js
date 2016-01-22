//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};

//
//DEFINE FUNCTIONS HERE
//

/*Part 1 - Create a function called getItems that simply returns the items array from the google product object.*/

var getItems = function(objectData){

	return objectData.items;
}

/*Part 2 - Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand*/

var itemsByBrand = [];
var getItemsByBrand = function(items, thebrand){
var q = 0;
	
	for (i = 0; i < items.length; ++i){
		if(items[i].product.brand.toLowerCase() === thebrand){
			itemsByBrand[q] = items[i];
			q++;
		}
	}

	return itemsByBrand;
	 
}

/*Part 3 - Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.*/

var itemsByAuthor = [];
var getItemsByAuthor = function(items, theauthor){
q = 0;

	for (i = 0; i < items.length; ++i){
		if(items[i].product.author.name.toLowerCase() === theauthor){
			itemsByAuthor[q] = items[i];
			q++;
		}
	}
	
	return itemsByAuthor;
	 
}

/*Part 4 - Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)*/

var availableProducts = [];
var getAvailableProducts = function(items){
var q = 0;
	
	for (i = 0; i < items.length; ++i){
		if(items[i].product.inventories[0].availability === "inStock"){
			availableProducts[q] = items[i];
			q++;
		}
	}

	return availableProducts;
	 
}



//load products.json
var data = require("./products.json")

//
//USE FUNCTIONS HERE
//


getItems(data);


/*Part 5 - All items made by Sony.*/
console.log(getItemsByBrand(getItems(data), 'sony'));

/*Part 5 - All items made by Sony that are available.*/
console.log(getAvailableProducts(getItemsByBrand(getItems(data), 'sony')));

/*Part 5 - All available items by the author "Adorama Camera"*/
console.log(getAvailableProducts(getItemsByAuthor(getItems(data), 'adorama camera'))); 

/*Part 5 - All items made by Nikon with the author eBay.*/
console.log(getItemsByAuthor(getItemsByBrand(getItems(data), 'nikon'), 'ebay'));

//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

