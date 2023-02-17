function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  const album = {
    artist: artist,
    title: title,
  };
  if (tracks) {
    album.tracks = tracks;
  }
  return album;
}

// Create three albums
const album1 = make_album("Taylor Swift", "Folklore");
const album2 = make_album("Ed Sheeran", "÷ (Divide)", 16);
const album3 = make_album("Beyoncé", "Lemonade", 12);

// Print each album
console.log(album1);
console.log(album2);
console.log(album3);
