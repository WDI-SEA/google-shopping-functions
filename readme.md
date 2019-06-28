# Google Shopping

We'll be using a file represented as **JSON** for this assignment. JSON is a standard for formatting data, and it's a common format you'll see throughout your web development career. Even more important will be parsing JSON.

This large object is in the products js file. It is the kind of object you would really recieve from google shopping.

### Hint
It's very important to understand the structure of the `products` object.
Use the console to look at this object. When you type the `product` variable into the console, it becomes interactive.

Paste in the code that can access certain parts of the object and see what values, if any, you get out.

Example `cats[1].allergies[6]` - if you don't see anything back up- try the thing above: `cats[1].allergies`

### more hints
* install a sublime package if you want to be able to see the object more clearly: [https://packagecontrol.io/packages/SyntaxFold](https://packagecontrol.io/packages/SyntaxFold)

* it allows you to "fold" your code to see the format of it.

* If you type in the variable name `products` in the google chrome developer console, you can see and inspect all the items in the product object.
* When in doubt, think about the different functions available for **strings**, **objects**, and **arrays**.
* Double-check your results, especially with #5
* Documentation
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

**REMEMBER:** data should be passed in to the function as arguments and out as a return value. DO NOT access/modify variables defined outside of the function.

## Getting Started

* Fork and clone this repository
* set up a basic index.html and script.js file. (no interactive unit 1 template for this first version)
* Start creating functions in `js/google_shopping_functions.js`
* Run your functions in `script.js`

## Deliverables

Create the following functions.

## 1.) getItems(objectData)

* **input:** json object
* **returns:** an array of items

Create a function called `getItems`. It returns the `items` array from the google product object.

**Note** all other functions (below) use the return of this function (the items array) as their input data.

## 2.) getItemsByBrand(items, brand)

* **input:** an array of items, a string of a brand to filter with
* **returns:** an array of items (of a specific brand)

Create a function called `getItemsByBrand` that takes an item array returns a new array of all items of a specified brand.

Test this function by searching for Sony, Canon, Nikon and Panasonic.


## 3.) getItemsByAuthor(items, author)

* **input:** an array of items, a string of an author to filter with
* **returns:** an array of items (of a specific author)

Create a function called `getItemsByAuthor` that takes an item array and returns a new array of all items by a specified author.

Test this function by searching for Target, CDW, eBay

## 4.) getAvailableProducts(items)

* **input:** an array of items
* **returns:** an array of items (that are available)

Create function called `getAvailableProducts` that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)


## 5.) Use your functions
Run your functions with the following data:

* All items made by Sony.
* All items made by Sony that are available.
* All available items by the author "Adorama Camera"
* All items made by Nikon with the author eBay.

Simply console.log the data at the end.

** Example Function Usage**

```js

//verbose -- outputs all cannon products
var items = getItems(data);
var cannonItems = getItemsByBrand(items, 'Cannon');
console.log(cannonItems);

//single line version -- does the same as above
console.log(getItemsByBrand(getItems(data), 'Cannon'));
```

## Further
Copy the unit 1 template into your code.

Get the `userInput` and use it as the search term input to your `getItemsByBrand` function.

## Further
If no results were found, let the user know.

## Further

Ask the user if they want to do or see the following things, then do that thing based on what the user entered:

1) The number of product items

2) The country of each item

3) Total price of all inventory

4) Search for one of the things above


## Further

Let the user enter in a maximum or minimum price. Only show them items that correspond.

## Further

Let the user enter in a maximum *and* minimum price. Only show them items that correspond.


---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
