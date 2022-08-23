import {pokemonArray} from "./data/pokemon.js";

const pokemonContainer = document.querySelector(".card-container");

const displayCard = (pokemon) => {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    pokemonContainer.innerHTML +=
    `
    <div class="card">
        <img class="card__image" src="${pokemon.sprite}">
        <div class="card__content">
            <div class="card__heading">${name}</div>
            <div class="card__text">${name} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type</div>
        </div>
    </div>
    `
};
pokemonArray.forEach(pokemon => displayCard(pokemon));