// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

// == Import : local
import './pokemonsList.scss';

import CardImage from 'src/components/pokemonsList/CardImage';
import CardDetails from 'src/components/pokemonsList/CardDetails';

// == Composant
const PokemonCard = ({
  name, id, face, searchDetails, exitFromCardDetails,
  pokDetails, personalLoading, 
}) => (
  <>
    <Card className="pokemonsList-container-item" >
      {personalLoading && <div>Loading</div>}
      {!personalLoading && face && <CardImage id={id} searchDetails={searchDetails} />}
      {!face && <CardDetails id={id} {...pokDetails} exitFromCardDetails={exitFromCardDetails} />}   
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
    personalLoading: PropTypes.bool.isRequired,
    searchDetails: PropTypes.func.isRequired,
    pokDetails: PropTypes.object.isRequired,
    exitFromCardDetails: PropTypes.func.isRequired,
};

// == Export
export default PokemonCard;