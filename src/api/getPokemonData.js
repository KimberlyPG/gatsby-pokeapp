export const getPokemonData = async (pokemonName, slug, setData) => {
    await fetch(`https://pokeapi.co/api/v2/${slug}/${pokemonName}`)
    .then(res => res.json())
    .then(data => setData(data))
  }