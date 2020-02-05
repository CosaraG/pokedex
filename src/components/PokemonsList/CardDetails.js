// == Import : npm
import React from 'react';
import PropTypes from 'prop-types'
import { Card, Icon } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';

const res = {
  id: 3,
  speedName: 'speed',
  speedStat: 49,
  defenceName: 'defence',
  defenceStat: 50,
  atackName: 'attack',
  atackStat: 9,
  weightName: 'weight',   
  weightStat: 56,         
 }

// == Composant
const CardDetails = ({
  id, speedName, speedStat, defenceName, defenceStat,
  atackName, atackStat, weightName, weightStat,
}) => (
  <>
    
    <Card.Content extra>
      <Card.Header className="pokemonsList-container-item-name">Stats:</Card.Header>
      <Card.Description className="pokemonsList-container-item-desc">
        <div>
          <Icon name='tachometer alternate' />
          <span> {speedName}: {speedStat}</span>
          </div>
        <div>
          <Icon name='shield' />
          <span> {defenceName}: {defenceStat}</span>
          </div>
        <div>
          <Icon name='spy' />
          <span> {atackName}: {atackStat}</span>   
          </div>
        <div>
          <Icon name='weight' />
          <span> {weightName}: {weightStat}</span>
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