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
			resolve: `gatsby-plugin-csp`,
			options: {
			  disableOnDev: true,
			  reportOnly: false, 
			  mergeStyleHashes: true, 
			  mergeDefaultDirectives: true,
			  directives: {
				"style-src": "'self' 'sha256-+b5dhCnFKLQjTs+HsVHv9sybaHIy5tgdKW5+ous6Za4=' 'sha256-n6qp5RzqWFPk8bwgYOlYGoExLtqxN33EngZLqOl9uWw='",
				"img-src": "'self' data: https:"
			  }
			}
		},
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
		}
    ],
}
