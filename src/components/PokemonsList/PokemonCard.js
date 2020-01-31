// == Import : npm
import React from 'react';
import { Card, Image } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';

// == Composant
const PokemonCard = () => (
  <>
    <Card className="pokemonsList-container-item">
      <Image 
        className="pokemonsList-container-item-image"
        src='https://picsum.photos/200'
        wrapped
        ui={false}
      />
      <Card.Content extra>
        <Card.Header className="pokemonsList-container-item-name">Matthew</Card.Header>
      </Card.Content>        
    </Card>
  </>
);

// == Export
export default PokemonCard;