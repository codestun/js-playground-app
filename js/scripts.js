// Immediately Invoked Function Expression (IIFE) assigned to new variable
let albumRepository = (function () {

  // album objects
  let albums = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getALL() {
    return albums;
  }

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

  function add(album) {
    typeof album === "object" ? albums.push(album) : console.log("Invalid data type. Only objects can be added to albums.");
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

  function showDetails(album) {
    console.log(`${album.name}`);
  }

  return {
    getALL: getALL,
    loadList: loadList,
    add: add,
    addEventListener: addEventListener,
    addListItem: addListItem,
    showDetails: showDetails,
  }

  //IIFE END
})()

// Now the data is loaded!
albumRepository.loadList().then(function () {

  // Loop through albums and print album name
  albumRepository.getALL().forEach(function (album) {
    albumRepository.addListItem(album);
    albumRepository.showDetails(album);
  });
});
