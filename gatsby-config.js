module.exports = {
  siteMetadata: {
    title: "My Homepage",
    description: "This is where I write my thoughts.",
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-source-pokemons',
    `gatsby-source-pokedex`,
    {
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 800,
      },
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://beta.pokeapi.co/graphql/v1beta',
        ],
      },
    }
  ],
}
