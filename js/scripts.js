// Immediately Invoked Function Expression (IIFE) assigned to new variable
let albumRepository = (function () {

  // album objects
  let albums = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function add(album) {
    typeof album === "object" ? albums.push(album) : console.log("Invalid data type. Only objects can be added to albums.");
  }

  function getALL() {
    return albums;
  }

  // Fetch data from the API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let album = {
          name: item.name,
          detailsUrl: item.url
        };
        add(album);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // Load the detailed data for a given album
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      // Add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function addEventListener(button, album) {
    button.addEventListener('click', function () {
      showDetails(album);
    });
  }

  function addListItem(album) {
    let albumList = document.querySelector('.album-list');
    let listalbum = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = album.name;
    button.classList.add('button-class');
    listalbum.appendChild(button);
    albumList.appendChild(listalbum);

    // Call the new function to add event listener
    addEventListener(button, album);
  }

  // Execute loadDetails() after user clicked on an album
  function showDetails(album) {
    loadDetails(album).then(function () {
      console.log(album);
    });
  }

  return {
    add: add,
    getALL: getALL,
    loadList: loadList,
    loadDetails: loadDetails,
    addEventListener: addEventListener,
    addListItem: addListItem,
    showDetails: showDetails,
  }

  //IIFE END
})()

// Now the data is loaded!
albumRepository.loadList().then(function () {

  // Loop through albums and print album names
  albumRepository.getALL().forEach(function (album) {
    albumRepository.addListItem(album);
  });
});
