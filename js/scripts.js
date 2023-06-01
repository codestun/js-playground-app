// Immediately Invoked Function Expression (IIFE) assigned to new variable
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
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    // Call the new function to add event listener
    addEventListener(button, pokemon);
  }

  // Execute loadDetails() after user clicked on an pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
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
pokemonRepository.loadList().then(function () {

  // Loop through pokemons and print pokemon names
  pokemonRepository.getALL().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// IIFE Start
(function () {

  // Function to show the modal
  function showModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.add('is-visible');
  }

  // Add event listener to the button with id "show-modal"
  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal();
  });

  //IIFE End
})();
