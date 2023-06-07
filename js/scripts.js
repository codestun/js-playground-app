// Immediately Invoked Function Expression (IIFE)
let pokemonRepository = (function () {

  // pokemon objects
  let pokemons = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function add(pokemon) {
    typeof pokemon === "object" ? pokemons.push(pokemon) : console.log("Invalid data type. Only objects can be added to pokemons.");
  }

  function getALL() {
    return pokemons;
  }

  // Fetch data from the API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // Load the detailed data for a given pokemon
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

  function addEventListener(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    let button = document.createElement('button');
    button.innerText = pokemon.name.toUpperCase();
    button.classList.add('btn');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    // Call the new function to add event listener
    addEventListener(button, pokemon);
  }

  // Execute loadDetails() after user clicked on a pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }
  // Function to show the modal
  function showModal(pokemon) {
    let modalTitle = document.querySelector('.modal-title');
    modalTitle.innerText = pokemon.name.toUpperCase();

    let modalBodyImage = document.querySelector('.modal-body-image');
    modalBodyImage.src = pokemon.imageUrl;
    modalBodyImage.alt = pokemon.name;

    let modalBodyHeight = document.querySelector('.modal-body-height');
    modalBodyHeight.innerText = `Height: ${pokemon.height}`;
  }

  return {
    add: add,
    getALL: getALL,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails,
    showModal: showModal,
  }

  //IIFE END
})()

// The data is loaded!
pokemonRepository.loadList().then(function () {

  // Loop through pokemons and print pokemon names
  pokemonRepository.getALL().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
