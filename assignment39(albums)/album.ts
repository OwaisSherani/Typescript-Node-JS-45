// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title.

function make_album (artist_name : string , album_title : string , tracks? :number ) //tracks optional parameters 
//  It should return a Object containing these two pieces of information.
{
    const album : {artist_name : string , album_title : string , tracks? :number} = {

        artist_name : artist_name,
        album_title : album_title,
        
    }
    // If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
    if (tracks != undefined)
{
    album.tracks = tracks; 
}

    return album;
}
// Make at least one new function call that includes the number of tracks on an album.
// Print each return value to show that Objects are storing the album information correctly.
const album1 = make_album ('Artist 1' , 'Title 1');
console.log (album1);

const album2 = make_album ('Artist 2' , 'Title 2');
console.log (album2);

const album3 = make_album ('Artist 3' , 'Title 3' , 12);
console.log (album3);