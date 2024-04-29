"use strict";
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("Toyota", "Yaris", { color: 'black', type: 'Automatic', year: "2024" });
console.log(myCar);
