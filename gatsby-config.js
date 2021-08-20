/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Pokedex',
    description: 'Pokedex for viewing and searching pokemon',
    author: 'Ben Sheridan-Edwards <bensheridanedwards@gmail.com>',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pokedex',
        short_name: 'Pokedex',
        start_url: '/',
        background_color: '#639',
        theme_color: '#FFFFFF',
        icon: 'src/assets/images/pokeball.svg',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'pokeAPI',
        fieldName: 'pokeapi',
        url: 'https://graphql-pokemon2.vercel.app',
      },
    },
  ],
};
