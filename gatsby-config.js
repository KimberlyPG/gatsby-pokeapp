module.exports = {
  siteMetadata: {
    title: "My Homepage",
    description: "This is where I write my thoughts.",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 251,
      },
    },
  ],
}
