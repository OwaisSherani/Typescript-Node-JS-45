// Assignment 18

let placas : string [] = [' italy ' , ' azerbaijan ' , ' ireland ' , ' turkey ']

// its original order by printing it.
console.log ('original ' + placas);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log (' copy ' + [...placas].sort());

// Show that your array is still in its original order by printing it again.
console.log ('original ' + placas);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log (' copy ' + [...placas].sort().reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log (' copy ' + [...placas].sort().reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log (' copy ' + placas.sort());
 
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log (' copy ' + placas.sort().reverse());

