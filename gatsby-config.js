const path = require(`path`);

module.exports = {
    siteMetadata: {
		title: `Pokesite`,
		author: `Kimberly Garcia`,
		description: `information each the pokemon`,
		image: `/assets/poke-icon.png`,
		siteUrl: `https://gatsbypokeappmaster.gatsbyjs.io`
    },
    plugins: [
		'gatsby-plugin-postcss',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-source-poke`,
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
			  "icon": "src/assets/poke-icon.png"
			}
		},
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
		},
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: {
			  lang: 'en-GB'
			}
		},
		{
			resolve: 'gatsby-source-graphql',
			options: {
			  typeName: 'GRAPHCMS',
			  fieldName: 'graphCmsData',
			  url: 'https://beta.pokeapi.co/graphql/v1beta',
			}
		  },
    ],
}
