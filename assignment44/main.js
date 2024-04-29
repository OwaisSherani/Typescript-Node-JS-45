"use strict";
// Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered.
function makeSandwich(item) {
    console.log("Making your sandwich");
    item.forEach(element => console.log("- " + element)); // element is a parameter
    console.log("Enjoy your Sandwich!\n");
}
//Call the function three times, using a different number of arguments each time.
makeSandwich(['cheese', 'breads', 'chicken']);
makeSandwich(['lettuce', 'bacon']);
makeSandwich(['ketchup', 'sauce', 'jelly']);
