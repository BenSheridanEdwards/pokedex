const path = require('path');

/**
 * Set up absolute imports - any import path is first assumed to come from 'src'
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pokemonTemplate = path.resolve(`./src/templates/pokemon.js`);
  const result = await graphql(`
    query {
      pokeapi {
        pokemons(first: 151) {
          id
          name
          number
          types
          image
          classification
        }
      }
    }
  `);

  result.data.pokeapi.pokemons.forEach(({ name }) => {
    createPage({
      path: `/pokemon/${name}/`,
      component: pokemonTemplate,
      context: {
        name,
      },
    });
  });
};
