import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import PokemonCard from '../components/PokemonCard/PokemonCard';

const Pokemon = (props) => {
  const {
    data: {
      pokeapi: {
        pokemon: { name, number, image, types, classification },
      },
    },
  } = props;

  return (
    <div className="pokemon">
      <Link to="/">Back to Pokedex</Link>
      <PokemonCard
        name={name}
        number={number}
        image={image}
        types={types}
        description={classification}
      />
    </div>
  );
};

export const pokemonQuery = graphql`
  query PokemonPageQuery($name: String!) {
    pokeapi {
      pokemon(name: $name) {
        name
        number
        image
        types
        classification
      }
    }
  }
`;

Pokemon.propTypes = {
  data: PropTypes.object,
  pokeapi: PropTypes.object,
  classification: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  image: PropTypes.string,
  types: PropTypes.array,
};

export default Pokemon;
