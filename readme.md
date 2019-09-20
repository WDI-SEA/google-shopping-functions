# Google Shopping

We'll be using a file represented as **JSON** for this assignment. JSON is a standard for formatting data, and it's a common format you'll see throughout your web development career. Even more important will be parsing JSON.

This large object is in the products js file. It is the kind of object you would really recieve from google shopping.

### Hint
**Before you begin writing any code**, it's very important to understand the structure of the `products` object.
Use the console to look at this object. When you type the `product` variable into the console, it becomes interactive.

Paste in the code that can access certain parts of the object and see what values, if any, you get out.

Example `cats[1].allergies[6]` - if you don't see anything back up- try the thing above: `cats[1].allergies`

### more hints
* install a sublime package if you want to be able to see the object more clearly: [https://packagecontrol.io/packages/SyntaxFold](https://packagecontrol.io/packages/SyntaxFold)

* it allows you to "fold" your code to see the format of it.

* If you type in the variable name `products` in the google chrome developer console, you can see and inspect all the items in the product object.
* When in doubt, think about the different functions available for **strings**, **objects**, and **arrays**.
* Double-check your results, especially with #3

**REMEMBER:** data should be passed in to the function as arguments and out as a return value. DO NOT access/modify variables defined outside of the function.

## Getting Started

* Fork and clone this repository
* write the first basic function `getItems` in `inputHappened`
* work on each section individually. when you get one section done, comment it out and work on another section.

* each function is called inside inputHappened

* write your function and test it without any user input

```js

var getItemsByBrand = function(items, brand){
  // some code
};


// just call the function right here and console.log to test
var result = getItemsByBrand(allItemsArray, "Nikon");
console.log( result );

// rest of code down here:

var inputHappened = function(currentInput){
  console.log( currentInput );

  .
  .
  .
```

* move your function into the `inputHappened` function to make it a complete user program.

## Deliverables

Create the following functions.

## 0.) getItems(objectData)

* **input:** json object
* **returns:** an array of items

Create a function called `getItems`. It returns the `items` array from the google product object.

**Note** all other functions (below) use the return of this function (the items array) as their input data.

Your code should call this function by default in `inputHappened`.

```js
var inputHappened = function(currentInput){
  console.log( currentInput );

  // before you begin the code below:
  var allItemsArray = getItems( products );

  // do stuff with items array

  return "WOW GOOGLE SHOPPING";
};

```


## 1.) getItemsByBrand(items, brand)
```js
/*
 * getItemsByBrand
 *
 * function purpose
 * takes an item array returns a new array of all items of a specified brand.
 *
 * data description
 * items - array of all item objects
 * brand - a brand to search for
 *
 * input example
 * var items = [
 *  {
 *    // some item object
 *  }, ... ]
 * var brand = "Sony";
 *
 * function signature
 * items (array), brand (string) --> items in brand (array)
 *
 * functional examples
 * var sonyItems = getItemsByBrand( items, "Sony" ); // returns all items that are Sony
 */
 ```

Test this function by searching for Sony, Canon, Nikon and Panasonic.


## 2.) getItemsByAuthor(items, author)


```js
/*
 * getItemsByAuthor
 *
 * function purpose
 * takes an item array returns a new array of all items of a specified author.
 *
 * data description
 * items - array of all item objects
 * author - a "store" to search for
 *
 * input example
 * var items = [
 *  {
 *    // some item object
 *  }, ... ]
 * var author = "Target";
 *
 * function signature
 * items (array), author (string) --> items by author (array)
 *
 * functional examples
 * var targetItems = getItemsByAuthor( items, "Target" ); // returns all items that are Sony
 */
 ```
Test this function by searching for Target, CDW, eBay

## 3.) getAvailableProducts(items)


```js
/*
 * getAvailableProducts
 *
 * function purpose
 * takes an item array returns a new array of all items that are available
 * an available product is one with at least one availability of "inStock" in the inventories array
 *
 * data description
 * items - array of all item objects
 *
 * input example
 * var items = [
 *  {
 *    // some item object
 *  }, ... ]
 *
 * function signature
 * items (array), --> items by author (array)
 *
 * functional examples
 * var availableItems = getAvailableItems( items ); // returns all available items
 */
 ```

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
