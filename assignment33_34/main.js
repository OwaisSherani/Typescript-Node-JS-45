"use strict";
// Store the numbers 1 through 9 in a array.
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array.
for (let i = 0; i <= ordinalNumbers.length; i++) {
    // Use an if-else chain inside the loop to print the proper ordinal ending for each number
    if (ordinalNumbers[i] == 1) {
        console.log(`${ordinalNumbers[i]}st`);
    }
    else if (ordinalNumbers[i] == 2) {
        console.log(`${ordinalNumbers[i]}nd`);
    }
    else if (ordinalNumbers[i] == 3) {
        console.log(`${ordinalNumbers[i]}rd`);
    }
    else if (ordinalNumbers[i] >= 4 && ordinalNumbers[i] <= 9) {
        console.log(`${ordinalNumbers[i]}th`);
    }
}
