// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';
import PokemonCard from './PokemonCard';

// == Composant
const PokemonsList = ({
  pokemonsData, filtredPokemonsData, pokemonsWithId, putDataWithId
}) => {
  console.log('pokemonsData', pokemonsData);
  
  if(pokemonsData !== []) {
    
    // console.log(results);
    //  const res = pokemonsData.map(item => {
    //    const newStr = item.url.slice(34,-1);
    //   // console.log(newStr);
    //    item.id = newStr;
    //   //console.log(item);   
    //  });     
  }
  //  if(filtredPokemonsData !== []) {
  //    console.log('filtredPokemonsData',filtredPokemonsData);
  //   pokemonsData = filtredPokemonsData;  
  // }
  

  return (
    <div id="pokemonsList">
      <Card.Group itemsPerRow={8} className="pokemonsList-container">
       {
          pokemonsWithId.map(item => (
            <PokemonCard key={item.id} {...item} />
          ))
        }
      </Card.Group>
    </div>
  );
} 

PokemonsList.propTypes = {
  pokemonsData: PropTypes.array.isRequired,
  filtredPokemonsData: PropTypes.array.isRequired,
  pokemonsWithId: PropTypes.array.isRequired,
  putDataWithId: PropTypes.func.isRequired,
};

// == Export
export default PokemonsList;