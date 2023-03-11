const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Pokemon site",
    description: "information about 800 pokemon",
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-pokeapi`,
      options: {
        nbOfPokemons: 800,
      },
    },
  ],
}
