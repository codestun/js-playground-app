// Immediately Invoked Function Expression (IIFE) assigned to new variable
let albumRepository = (function () {

  // Array of Albums taken from Spotify API
  let albums = [
    // album objects
    {
      name: "1989",
      artist: "Taylor Swift",
      album_type: "Pop",
      release_date_precision: "2014-10-27",
      tracks: ["Welcome to New York", "Blank Space", "Style", "Out of the Woods"]
    },
    {
      name: "The Eminem Show",
      artist: "Eminem",
      album_type: "Hip-Hop",
      release_date_precision: "2002-05-28",
      tracks: ["White America", "Cleanin' Out My Closet", "Business", "White America", "Superman", "Say Goodbye Hollywoood", "Say What You Say", "Without Me", "Sing for the Moment"]
    },
    {
      name: "Hybrid Theory",
      artist: "Linkin Park",
      album_type: "Alternative",
      release_date_precision: "2000-10-24",
      tracks: ["Papercut", "One Step Closer", "With You", "Points of Authority", "Crawling", "Runaway", "By Myself", "In The End"]
    },
    {
      name: "Bad",
      artist: "Michael Jackson",
      album_type: "Pop",
      release_date_precision: "1987-08-31",
      tracks: ["Bad", "The Way You Make Me Feel", "Man in the Mirror", "Smooth Criminal"]
    },
    {
      name: "Between Two Shores",
      artist: "Glen Hansard",
      album_type: "Folk",
      release_date_precision: "2018-01-19",
      tracks: ["Roll On Slow", "Why Woman", "Wheels on Fire", "Wreckless Heart", "Movin' On", "Setting Forth", "Lucky Man", "One of Us Must Lose", "Your Heart's Not In It", "Time Will Be the Healer"]
    },
    {
      name: "Thriller",
      artist: "Michael Jackson",
      album_type: "Pop",
      release_date_precision: "1982-11-30",
      tracks: ["Wanna Be Startin' Somethin'", "Thriller", "Beat It", "Billie Jean"]
    },
    {
      name: "Rumours",
      artist: "Fleetwood Mac",
      album_type: "Rock",
      release_date_precision: "1977-02-04",
      tracks: ["Second Hand News", "Dreams", "Never Going Back Again", "Don't Stop"]
    },
    {
      name: "Back in Black",
      artist: "AC/DC",
      album_type: "Rock",
      release_date_precision: "1980-07-25",
      tracks: ["Hells Bells", "Shoot to Thrill", "Back in Black", "You Shook Me All Night Long"]
    },
    {
      name: "21",
      artist: "Adele",
      album_type: "Pop",
      release_date_precision: "2011-01-24",
      tracks: ["Rolling in the Deep", "Rumour Has It", "Turning Tables", "Someone Like You"]
    }
  ]

  function getALL() {
    return albums;
  }
  function add(album) {
    albums.push(album);
  }

  return {
    getALL: getALL,
    add: add
  }

  //IIFE END
})()

// Start of container and heading
document.write(`<div class="container"><h1>Album Names and Track Counts</h1>`);

// Loop through albums and print album name and track count
albums.forEach((album) => document.write(`<p>${album.name} - ${album.tracks.length} tracks</p>`));

// Variables to track the album with the most tracks
let maxTracks = 9;
let albumWithMaxTracks = '';

// Find the album with the maximum number of tracks
for (let i = 0; i < albums.length; i++) {
  if (albums[i].tracks && albums[i].tracks.length > maxTracks) {
    maxTracks = albums[i].tracks.length;
    albumWithMaxTracks = albums[i].name;
  }
}

// Check if there is an album with more tracks and print the result
if (albumWithMaxTracks) {
  document.write(`<br>Wow, the album <strong>"${albumWithMaxTracks}"</strong> has the most tracks with a count of <strong>${maxTracks}</strong>!`);
}

// End of container
document.write(`</div>`);
