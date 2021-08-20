import * as React from 'react';
import { render } from '@testing-library/react';
import PokemonCard from './PokemonCard';

describe('PokemonCard component', () => {
  const createWrapper = (extraProps = {}) => {
    return render(
      <PokemonCard
        name={'Charizard'}
        number={'006'}
        image={'image.png'}
        types={['Fire', 'Flying']}
        description={'Flame Pokémon'}
        {...extraProps}
      />
    );
  };

  it("should render the Pokémon's name", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('Charizard')).toBeInTheDocument();
  });

  it("should render the Pokémon's types", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('Fire')).toBeInTheDocument();
    expect(wrapper.getByText('Flying')).toBeInTheDocument();
  });

  it("should render the Pokémon's description", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('Flame Pokémon')).toBeInTheDocument();
  });

  it("should render the Pokémon's number", () => {
    const wrapper = createWrapper();
    expect(wrapper.getByText('#006')).toBeInTheDocument();
  });
});
