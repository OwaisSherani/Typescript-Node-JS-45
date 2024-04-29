let car : string =  'toyota';
let age : number = 25
let numbers : number [] = [0,1,2,3,4,5];

// Test-1 equality true case

console.log ("Is car == 'toyota' ? I predict true");
console.log (car == 'toyota');

// Test-2 strict quality false case

console.log ("Is car === 'toyota' ? I predict true");
console.log (car === 'toyota');



// Test-3 inequality true case

console.log ("Is car !== 'toyota' ? I predict false");
console.log (car !== 'toyota');

// Test-4 inequality false case

console.log ("Is car != 'toyota' ? I predict false");
console.log (car != 'toyota');

// Test-5 to lowercase  true

console.log ("Is car.toLowerCase() == 'toyota'? I predict true");
console.log (car.toLowerCase()== 'toyota');

// Test-6  to lowercase false

console.log ("Is car === toLowerCase()? I predict false");
console.log (car === car.toLowerCase());

// number True
console.log ("Is age == 25? I predict true");
console.log (age == 25);

// False
console.log ("Is age == 30? I predict false");
console.log (age == 30);

// age greater than false

console.log ("Is age > 30? I predict false");
console.log (age > 30);

// age greater than false

console.log ("Is age <= 30? I predict true");
console.log (age <= 30);

// And oprator True

console.log ("Is age > 20 && age <30? I predict true");
console.log (age > 20 && age <30); // both condition met

// And OR True

console.log ("Is age > 20 || age <30? I predict false");
console.log (age > 30 || age > 20); // neither condition met

// Array test
// in array true
console.log ("Is 3 is in number? I predict true.");
console.log (3 in numbers);

// not in array false
console.log ("Is 6 in number? I predict false.");
console.log (6 in numbers);




