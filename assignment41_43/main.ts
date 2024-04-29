
// Make a array of magician’s names. 
let magician_names : string [] = ['Shahid' , 'Khan' , 'Zubair' , 'Rehman']

// Call the function make_great() with a copy of the array of magicians’ names
function copyArry (arr:string[]){ //assignment 43

    return [...arr]; //return copy array

}



 function make_great (magician:string[]){  //assignment 42

    for (let i=0 ; i<magician.length ; i++){

        magician_names[i] = 'The great ' +magician[i];
    }
};
 // Pass the array to a function called show_magicians()
function show_magicians(magician_names:string[]){  //assignment 41

    magician_names.forEach ( element =>{  // which prints the name of each magician in the array.
        console.log (element);

})
};

const copyMagician = copyArry(magician_names); // to catch the variables
make_great(copyMagician); //the original names and one array with the Great added to each magician’s name.

console.log ('This is my original array')
show_magicians (magician_names); 

console.log ('\n\nThis is my modified array')
show_magicians (copyMagician); 
