// Set a value for the variable age

let age : number = 65;

// If the person is less than 2 years old, print a message that the person is a baby.

if (age<2){

    console.log ('The person is baby');
}
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler
 else if (age >= 2 && age < 4){

    console.log ('The person is a toddler');
 }

 else if (age >= 4 && age < 13){
    console.log ('The person is a kid');
 }

 else if (age >= 13 && age < 20){
    console.log ('The person is a teenager');
 }
 else if (age >= 20 && age < 65){
    console.log ('The person is a adult');
 }
else {
    console.log ('The person is older');
}