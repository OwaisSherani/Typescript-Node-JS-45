"use strict";
//  Modify the make_shirt() function so that shirts are large by default with a message.
function make_shirt(size = 'Large', text = 'I Love Typescript') {
    console.log(` Creating a ${size} shirt with the message ${text}`);
}
// Make a large shirt and a medium shirt with the default message
make_shirt(); // priniting by default size "large" and efault message
make_shirt('Medium', 'I love C++');
make_shirt('Small', 'I love Python');
