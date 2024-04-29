function describe_city (Cities : string , Country : string = 'Default Country.')
{

console.log (`${Cities} is in ${Country}`);

}

describe_city ('Karachi' , 'Pakistan')
describe_city ('Beijing' , 'China')
describe_city ('Sydney')


// asignment 39 retunr function

function describe_cty (city : string , country : string)
{

    return `${city}`;
}

console.log (describe_cty ('Karachi' , 'Pakistan'));