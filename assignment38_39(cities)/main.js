"use strict";
function describe_city(Cities, Country = 'Default Country.') {
    console.log(`${Cities} is in ${Country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Beijing', 'China');
describe_city('Sydney');
// asignment 39 retunr function
function describe_cty(city, country) {
    return `${country}`;
}
console.log(describe_cty('Karachi', 'Pakistan'));
