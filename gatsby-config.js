module.exports = {
  siteMetadata: {
    title: "My Homepage",
    description: "This is where I write my thoughts.",
  },
  plugins: [
    {
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 251,
      },
    },
  ],
}
