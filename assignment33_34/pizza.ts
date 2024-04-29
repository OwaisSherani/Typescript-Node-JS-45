// Store pizza names in a array, and then use a for loop to print the name of each pizza.
let myPizzas : string [] = ['Bbq Pizza' , 'Fajita Pizza' , 'Pepperoni Pizza']

for (let i = 0 ; i< myPizzas.length ; i++){

    console.log (myPizzas[i]);
}

// printing simple statement of eacgh pizza
for (let i = 0 ; i< myPizzas.length ; i++){

    console.log (`I like to eat ${myPizzas[i]}`);
}

console.log ('I really like pizza.\nPizza flavor was awesome. \nShould be rate of this place.');