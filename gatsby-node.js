// const axios = require('axios');

// const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

// export const getPokemonData = (names) =>
//   Promise.all(
//     names.map(async name => {
//       const { data: pokemon } = await get(`/pokemon/${name}`);
//       return pokemon;
//     })
//   );

// exports.createPages = async ({ actions: { createPage } }) => {
//   const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle']);

//   // Create a page for each Pokémon.
//   getPokemonData.forEach(pokemon => {
//     createPage({
//       path: `/pokemon/${pokemon.name}/`,
//       component: require.resolve('./src/pages/pokemon.jsx'),
//       context: { pokemon }
//     });

// //   });
// // };