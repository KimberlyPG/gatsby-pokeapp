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
    `gatsby-source-poke`,
    // {
    //   resolve: `gatsby-source-pokeapi`,
    //   options: {
    //     nbOfPokemons: 386,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ]
      }
    }
  ],
}
