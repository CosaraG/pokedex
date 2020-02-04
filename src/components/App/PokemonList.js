// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';
import PokemonCard from 'src/components/PokemonsList/PokemonCard';

// == Composant
const PokemonsList = ({ pokemonsWithId, message }) => {
  console.log('message', message);
  
  return (
    <div id="pokemonsList">
      <Card.Group itemsPerRow={8} className="pokemonsList-container">
       {
          pokemonsWithId.map((item) => (
            <PokemonCard key={item.id} {...item} message={message} />
          ))
        }
      </Card.Group>
    </div>
  );
} 

PokemonsList.propTypes = {
  pokemonsWithId: PropTypes.array.isRequired,
  //searchDetails: PropTypes.func.isRequired,
};

// == Export
export default PokemonsList;