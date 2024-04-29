let users : string [] = ['Owais' , 'Haris' , 'Huzaifa' , 'Anus' , 'Admin']

for (let user of users){

    if (user == 'Admin'){

        console.log ('Hello Admin ! would you like to see a satus report?')
    }

else{
    console.log (`Hello ${user} , thank you for logging in again`)
}
}