import {pokemonArray} from "./data/pokemon.js";

console.log(pokemonArray[1]);

const pokemonContainer = document.querySelector(".card-container");


// pokemon.name = pokemon.name.charAt(0).toUpperCase()


const displayCard = (pokemon) => {
    
    //charAt(0) will return the first character of each name and capitalise
    //then add rest of the name apart from first character using slic(1)
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