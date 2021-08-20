import React, { useState, useEffect, useCallback } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import PokemonCard from '../PokemonCard/PokemonCard';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import PokedexLogo from '../../assets/images/pokedex-logo.png';

const allPokemonQuery = graphql`
  query MyQuery {
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
`;

const Pokedex = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [pokemonDisplayList, setPokemonDisplayList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const allOriginalPokemon = useStaticQuery(allPokemonQuery).pokeapi.pokemons;
  const itemsPerPage = 15;

  useEffect(() => {
    if (!searchValue.length) {
      setTotalPages(Math.ceil(allOriginalPokemon.length / itemsPerPage));
      setPokemonDisplayList(allOriginalPokemon);
      setPageNumber(1);
    }
  }, [searchValue, allOriginalPokemon]);

  const getPaginatedList = useCallback(
    (displayList) => {
      const itemsSeen = (pageNumber - 1) * itemsPerPage;

      return displayList.slice(itemsSeen, itemsSeen + itemsPerPage);
    },
    [pageNumber]
  );

  const resetPageNumber = () => {
    setPageNumber(1);
  };

  return (
    <>
      <div className="pokedex__header">
        <img className="pokedex__image" src={PokedexLogo} alt="Pokedex logo" />
        <SearchBar
          dataList={allOriginalPokemon}
          placeholderText={'Search Pokemon'}
          itemsPerPage={itemsPerPage}
          resetPageNumber={resetPageNumber}
          searchValue={searchValue}
          searchPriority={['name']}
          setDisplayList={setPokemonDisplayList}
          setSearchValue={setSearchValue}
          setTotalPages={setTotalPages}
        />
      </div>
      <div className="pokedex__body">
        <ul className="pokemon-list">
          {pokemonDisplayList.length ? (
            getPaginatedList(pokemonDisplayList).map((pokemon) => {
              return (
                <li className="pokemon-list__item" key={pokemon.name}>
                  <Link
                    className="pokemon-list__item-link"
                    to={`/pokemon/${pokemon.name}`}
                  >
                    <PokemonCard
                      name={pokemon.name}
                      number={pokemon.number}
                      image={pokemon.image}
                      types={pokemon.types}
                      description={pokemon.classification}
                    />
                  </Link>
                </li>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </ul>
        <Pagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPages={totalPages}
        />
      </div>
      <div className="pokedex__footer">
        <div className="attribute">
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/roundicons-freebies"
            title="Roundicons Freebies"
          >
            Roundicons Freebies
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Pokedex;
