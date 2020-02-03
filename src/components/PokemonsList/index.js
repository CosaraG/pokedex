// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';
import PokemonCard from './PokemonCard';

// == Composant
const PokemonsList = ({ pokemonsWithId }) => {
  return (
    <div id="pokemonsList">
      <Card.Group itemsPerRow={8} className="pokemonsList-container">
       {
          pokemonsWithId.map((item) => (
            <PokemonCard key={item.id} {...item} />
          ))
        }
      </Card.Group>
    </div>
  );
} 

PokemonsList.propTypes = {
  pokemonsWithId: PropTypes.array.isRequired,
};

// == Export
export default PokemonsList;