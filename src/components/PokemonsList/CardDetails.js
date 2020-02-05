// == Import : npm
import React from 'react';
import PropTypes from 'prop-types'
import { Card, Icon } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';

// == Composant
const CardDetails = ({ id }) => (
  <>
    
    <Card.Content extra>
      <Card.Header className="pokemonsList-container-item-name">Stats:</Card.Header>
      <Card.Description className="pokemonsList-container-item-desc">
        <div>
          <Icon name='tachometer alternate' />
          <span> Speed: 49</span>
          </div>
        <div>
          <Icon name='shield' />
          <span> Defence: 49</span>
          </div>
        <div>
          <Icon name='spy' />
          <span> Attack: 49</span>         
          </div>
        <div>
          <Icon name='weight' />
          <span> Weight: 69</span>
        </div>
      </Card.Description>
    </Card.Content>    
  </>
);

CardDetails.propTypes = {
    id: PropTypes.string.isRequired,
};

// == Export
export default CardDetails;