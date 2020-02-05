// == Import : npm
import React from 'react';
import PropTypes from 'prop-types'
import { Card, Image } from 'semantic-ui-react'

// == Import : local
import './pokemonsList.scss';

// == Composant
const CardImage = ({ id }) => (
  <>
    <Image 
      className="pokemonsList-container-item-image"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      wrapped
      ui={false}
    />
  </>
);

CardImage.propTypes = {
    id: PropTypes.string.isRequired,
};

// == Export
export default CardImage;