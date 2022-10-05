// img src = ""  alt = " Pokemon"  id = " pokemon - image >"  esto va en index.html

const cuandoLlegueElPokemon = (pokemon) => {
    console.log(pokemon.sprites.front_default)
    const image = document.getElementById("pokemon-image")
    image.src = pokemon.sprites.front_default
}

const pokemonName = prompt( 'Eligue tu pokemon:')

fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
    .then(response => response.json())
    .then(cuandoLlegueElPokemon);

