// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';
import PokemonCard from './PokemonCard';

// == Composant
const PokemonsList = ({ pokemonsData }) => {
  const { results } = pokemonsData[0];
 // console.log(results);
  const res = results.map(item=>{
    const newStr = item.url.slice(34,-1);
   // console.log(newStr);
    item.id = newStr;
   //console.log(item);
   
    
  });
  
  return (
    <div id="pokemonsList">
      <Card.Group itemsPerRow={4} className="pokemonsList-container">
        {results.map(item => (
          <PokemonCard key={item.id} {...item} />
        ))}
        
      </Card.Group>
    </div>
  );
} 

PokemonsList.propTypes = {

};

// == Export
export default PokemonsList;