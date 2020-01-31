// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';
import PokemonCard from './PokemonCard';

// == Composant
const PokemonsList = ({ pokemonsData }) => {
  if(pokemonsData !== []) {
    // console.log(results);
     const res = pokemonsData.map(item => {
       const newStr = item.url.slice(34,-1);
      // console.log(newStr);
       item.id = newStr;
      //console.log(item);   
     });     
  }

  return (
    <div id="pokemonsList">
      <Card.Group itemsPerRow={4} className="pokemonsList-container">
       {
          pokemonsData.map(item => (
            <PokemonCard key={item.id} {...item} />
          ))
        }
      </Card.Group>
    </div>
  );
} 

PokemonsList.propTypes = {
  pokemonsData: PropTypes.array.isRequired,
};

// == Export
export default PokemonsList;