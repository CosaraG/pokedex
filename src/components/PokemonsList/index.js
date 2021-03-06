// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';
import PokemonCard from './PokemonCard';

// == Composant
const PokemonsList = ({ filtredPokemonsData, searchDetails, exitFromCardDetails }) => {
  return (
    <div className="pokemonsList"  >
      <Card.Group itemsPerRow={7} className="pokemonsList-container">
       {
          filtredPokemonsData.map((item) => (
            <PokemonCard
              key={item.id}
              pokDetails={item}
              {...item}
              searchDetails={searchDetails}
              exitFromCardDetails={exitFromCardDetails}
              />
          ))
        }
      </Card.Group>
    </div>
  );
} 

PokemonsList.propTypes = {
  filtredPokemonsData: PropTypes.array.isRequired,
  searchDetails: PropTypes.func.isRequired,
};

// == Export
export default PokemonsList;