"use strict";

var _pokemon = require("./data/pokemon.js");

console.log(_pokemon.pokemonArray[1]);
var pokemonContainer = document.createElement('div'); // pokemonContainer.innerHTML = '<div class="card-container"></div>';

var displayCard = function displayCard(pokemon) {
  pokemonContainer.innerHTML += "\n    <div class=\"card\">\n      <div class=\"card__image\" src=\"".concat(pokemon.sprite, "\"></div>\n      <div class=\"card__content\">\n        <div class=\"card__heading\">").concat(pokemon.name, "</div>\n        <div class=\"card__text\">").concat(pokemon.types, "</div>\n      </div>\n    </div>\n    ");
};

_pokemon.pokemonArray.forEach(function (pokemon) {
  displayCard[pokemon];
});