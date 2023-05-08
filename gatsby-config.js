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
			  mergeScriptHashes: true,
			  mergeStyleHashes: true,
			  mergeDefaultDirectives: true,
			  directives: {
				"script-src": "'self' www.google-analytics.com",
				"style-src": "'self' 'unsafe-inline'",
				"img-src": "'self' data: www.google-analytics.com"
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
