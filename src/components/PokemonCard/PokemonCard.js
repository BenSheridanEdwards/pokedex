import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = (props) => {
  const { name, number, image, types, description } = props;
  return (
    <div
      className={`card pokemon-card pokemon-card--${types[0].toLowerCase()}`}
    >
      <div className="card__header">
        <h2 className="pokemon-card__text">{name}</h2>
        <div className="pokemon-card__image">
          <img src={image} alt={`${name}`} />
        </div>
      </div>
      <div className="card__body">
        <div className="pokemon-card__list--type">
          {types.map((type) => {
            return (
              <span
                key={`${type}`}
                className={`pokemon-card__type pokemon-card__type--${type.toLowerCase()}`}
              >
                {type}
              </span>
            );
          })}
        </div>
      </div>
      <div className="card__footer">
        <div className="pokemon-card__description">
          <h3 className="pokemon-card__sub-header">Description</h3>
          <span className="pokemon-card__text">{description}</span>
        </div>
        <span className="pokemon-card__text">#{number}</span>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  number: PropTypes.string,
  types: PropTypes.array,
  image: PropTypes.string,
};

export default PokemonCard;
