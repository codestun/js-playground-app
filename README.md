# Pokedex App

## Project Description:

This project is a Pokédex app that displays a list of Pokémon and their details using the PokéAPI. The app is built using HTML, CSS, and JavaScript, and it utilizes the Bootstrap framework for styling and responsiveness.

### Key Features
    - Load data from an external API
    - View a list of items
    - View details for that item by clicking on a list item

## How to Get the Project Running:

Download the HTML, CSS, and JavaScript files provided.
Ensure you have a modern web browser installed (e.g., Chrome, Firefox).
Open the HTML file (index.html) in your preferred web browser.
The app should now be running, and you can interact with the Pokédex.

## Project Dependencies:

JavaScript: The project is written in vanilla JavaScript, compatible with modern browser versions.

Bootstrap: The project uses Bootstrap 4.3.1 for styling and layout. The Bootstrap CSS and JavaScript files are included via CDN links in the HTML file.
Promise and Fetch Polyfills: The project includes polyfill scripts (promise-polyfill.js and fetch-polyfill.js) to ensure cross-browser compatibility for the fetch API.

- Polyfills
   - [Promise](https://raw.githubusercontent.com/taylorhakes/promise-polyfill/master/dist/polyfill.js)
   - [Fetch](https://github.com/github/fetch/blob/master/fetch.js)


- Frameworks
   - [Bootstrap](https://getbootstrap.com/)
   - [ESLint](https://eslint.org/docs/latest/)
   - [Stylelint](https://gist.github.com/mydea/8a5c49b2a13320871ab29eb88a0e7d37)

The project uses the PokéAPI (https://pokeapi.co/) to fetch Pokémon data. The API provides information about Pokémon species, abilities, moves, and more. The specific endpoint used in the project is 'https://pokeapi.co/api/v2/pokemon/?limit=150', which retrieves the details of the first 150 Pokémon. The app fetches the data from this API to populate the Pokédex with Pokémon information.
