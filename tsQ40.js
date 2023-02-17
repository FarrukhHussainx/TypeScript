function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums
var album1 = make_album("Taylor Swift", "Folklore");
var album2 = make_album("Ed Sheeran", "÷ (Divide)", 16);
var album3 = make_album("Beyoncé", "Lemonade", 12);
// Print each album
console.log(album1);
console.log(album2);
console.log(album3);
