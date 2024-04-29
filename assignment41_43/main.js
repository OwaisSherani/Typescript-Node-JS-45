"use strict";
// Make a array of magician’s names. 
let magician_names = ['Shahid', 'Khan', 'Zubair', 'Rehman'];
// Call the function make_great() with a copy of the array of magicians’ names
function copyArry(arr) {
    return [...arr]; //return copy array
}
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician_names[i] = 'The great ' + magician[i];
    }
}
;
// Pass the array to a function called show_magicians()
function show_magicians(magician_names) {
    magician_names.forEach(element => {
        console.log(element);
    });
}
;
const copyMagician = copyArry(magician_names); // to catch the variables
make_great(copyMagician); //the original names and one array with the Great added to each magician’s name.
console.log('This is my original array');
show_magicians(magician_names);
console.log('\n\nThis is my modified array');
show_magicians(copyMagician);
