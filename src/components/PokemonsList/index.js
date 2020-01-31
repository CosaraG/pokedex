// == Import : npm
import React from 'react';
import { Card, Image } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';
import PokemonCard from './PokemonCard';

// == Composant
const PokemonsList = () => (
  <div id="pokemonsList">
    <Card.Group itemsPerRow={4} className="pokemonsList-container">
      <PokemonCard />
    </Card.Group>
  </div>
);

// == Export
export default PokemonsList;