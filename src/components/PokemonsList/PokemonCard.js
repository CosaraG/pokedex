// == Import : npm
import React from 'react';
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';

// == Composant
const PokemonCard = ({ name, id, searchDetails }) => (
  <>
    <Card className="pokemonsList-container-item" onClick={searchDetails(id)} >
      <Image 
        className="pokemonsList-container-item-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        wrapped
        ui={false}
      />
      <Card.Content extra>
        <Card.Header className="pokemonsList-container-item-name">{name}</Card.Header>
      </Card.Content>        
    </Card>
  </>
);

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    searchDetails: PropTypes.func.isRequired,
};

// == Export
export default PokemonCard;