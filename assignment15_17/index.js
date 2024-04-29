"use strict";
// Assignment 15
let guestList = ['Owais', 'Haris', 'Anus', 'Zaid', 'Hassan'];
// for (let i = 0 ; i < guestList.length ; i++){
//     console.log ('Dear' , guestList[i] , ',\n we invited you on dinner tomorrow \n');
// }
let not_Guest = 'Anus';
let new_guest = 'Hamza';
guestList[2] = new_guest;
// for (let i=0 ; i <guestList.length ; i++){
//     console.log ('Dear '  + guestList[i] + '\n we invited you on dinner tomorrow \n Thank you \n');
// }
//Assignment 16
guestList.unshift('Soban', 'Baqir', 'Raheem');
// for (let i=0 ; i <guestList.length ; i++){
//    console.log ('Dear '  + guestList[i] + '\n we invited you on dinner tomorrow, we found big table so we decided to invite 3 more new guests \n Thank you \n');
// }
//  console.log (`Mr. ${not_Guest} will not come tomorrow on dinner`);
//  console.log (`Mr. ${new_guest} will come tomorrow on dinner`);
// assignment 17
//  console.log ('We invite only two people for dinner')
//  while (guestList.length>2){  // remove all guests except two persons
//     let removeGuest = guestList.pop();
//     console.log (`Mr. ${removeGuest} \n Sorry you're not invited for dinner`); 
//  }
//  for (let i=0 ; i <guestList.length ; i++){
//    console.log ('Dear '  + guestList[i] + '\n we invited you on dinner tomorrow, we found big table so we decided to invite 3 more new guests \n Thank you \n');
// }
guestList.splice(0, 2); //remove las two name from guest list
console.log(guestList); // print empty list
