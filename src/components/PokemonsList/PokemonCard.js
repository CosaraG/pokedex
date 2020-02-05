// == Import : npm
import React from 'react';
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';

import CardImage from 'src/components/pokemonsList/CardImage';
import CardDetails from 'src/components/pokemonsList/CardDetails';

// == Composant
const PokemonCard = ({ name, id, face, searchDetails }) => (
  <>
    <Card className="pokemonsList-container-item" onClick={searchDetails(id)} >
      {face && <CardImage id={id} />}
      {!face && <CardDetails id={id} />}   
      <Card.Content extra>
        <Card.Header className="pokemonsList-container-item-name">{name}</Card.Header>
      </Card.Content>    
    </Card>
  </>
);

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    face: PropTypes.bool.isRequired,
    searchDetails: PropTypes.func.isRequired,
};

// == Export
export default PokemonCard;