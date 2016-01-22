//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){

	return itemData.length;
};

var getItemsByBrand = function(items, brand) 
{
	var array=[];
	var obj  = {
		num: -1,

	}
	for (var l=0; l<items.length; l++)
{
	var brnd = items[l]["product"].brand;
	
	if (brnd.toLowerCase()=== brand.toLowerCase())
	{
		array.push(items[l]);
	}

}

	return array;
}

var getItemsByAuthor = function(items, author)
{
	var array = [];
	for (var m=0; m<items.length; m++)
	{
		var ath = items[m]["product"]["author"].name;
		var ath2 = ath.toLowerCase();
		if (ath2.includes(author.toLowerCase()))
		{
			array.push(items[m]);
		
		}
	}

	return array;

}

var getAvaliableProducts = function(items)
{
	var array = [];
	for (var j=0; j<items.length; j++)
	{
		if (items[j]["product"]["inventories"][0].availability==="inStock")
		{
			array.push(items[j]);
		}
	}

	return array;
}

//
//DEFINE FUNCTIONS HERE
//





//load products.json
var data = require("./products.json")
var items = data["items"];
var brand = "Sony";
var author = "Adorama Camera";
var brand2 = "Nikon";
var author2 = "eBay";




//
//USE FUNCTIONS HERE
//

var z = getItemsCount(items);
var brandArray = getItemsByBrand(items, brand);
var authorArray = getItemsByAuthor(items, author);
var avaliableArray = getAvaliableProducts(items);
var authorArray2 = getItemsByAuthor(items, author2);
var brandArray2 = getItemsByBrand(items, brand2);




//output item count using the getItemsCount function
console.log("Number of items "+ z);

//output items made by brand i.e. Sony
for(var l=0; l<brandArray.length; l++)
{
	
	for(var a=0; a<items.length; a++)
	{
		
		if (brandArray[l]["product"].googleId===items[a]["product"].googleId)
		{
			console.log("Item "+ a +" is a "+ brand);
		}
	}
}

//output avaliable items
// for(var j=0; j<avaliableArray.length; j++)
// {
// 	for(var c=0; c<items.length; c++)
// 	{
// 		if (avaliableArray[j]["product"].googleId===items[c]["product"].googleId)
// 		{
// 			console.log("Item "+ c +" is avaliable ");
// 		}
// 	}
// }



//output sony items avaliable
for(var n=0; n<brandArray.length; n++)
{
	for(var count1=0; count1<avaliableArray.length; count1++)
	{
		if (brandArray[n]["product"].googleId===avaliableArray[count1]["product"].googleId)
		{

			for(var b=0; b<items.length; b++)
			{
				
				if (brandArray[n]["product"].googleId===items[b]["product"].googleId)
				{
					console.log("Item "+ b +" is a both made by "+brand +" and is avaliable");
				}
			}

		}
	}
}

// items made by adorama
// for(var m=0; m<authorArray.length; m++)
// {

// 			for(var c=0; c<items.length; c++)
// 			{
				
// 				if (authorArray[m]["product"].googleId===items[c]["product"].googleId)
// 				{
// 					console.log("Item "+ c +" is a both made by "+ author);
// 				}
// 			}

		
// }


// avaliable items made by adorama camera
for(var m=0; m<authorArray.length; m++)
{
	for(var count2=0; count2<avaliableArray.length; count2++)
	{
		if (authorArray[m]["product"].googleId===avaliableArray[count2]["product"].googleId)
		{

			for(var c=0; c<items.length; c++)
			{
				
				if (authorArray[m]["product"].googleId===items[c]["product"].googleId)
				{
					console.log("Item "+ c +" is a both made by "+ author +" and is avaliable");
				}
			}

		}
	}
	
}

// Nikon Ebay
for(var p=0; p<authorArray2.length; p++)
{
	for(var count3=0; count3<brandArray2.length; count3++)
	{
		if (authorArray2[p]["product"].googleId===brandArray2[count3]["product"].googleId)
		{

			for(var d=0; d<items.length; d++)
			{
				
				if (authorArray2[p]["product"].googleId===items[d]["product"].googleId)
				{
					console.log("Item "+ d +" is a both made by "+ brand2 +" and is posted by " + author2);
				}
			}

		}
	}
	
}

// for(var j=0; j<avaliableArray.length; j++)
// {
// 	for(var c=0; c<items.length; c++)
// 	{
// 		if (avaliableArray[j]["product"].googleId===items[c]["product"].googleId)
// 		{
// 			console.log("Item "+ c +" is avaliable ");
// 		}
// 	}
// }

