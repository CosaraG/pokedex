// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
import InputField from 'src/containers/InputField';
import PokemonsList from 'src/containers/PokemonsList';

// == Composant
const App = ({ searchPokemons }) => {
  useEffect(() => {
    searchPokemons();
  }, []);
  return (
    <div id="app">
      <InputField />
      <PokemonsList />
    </div>
  );
};

App.propTypes = {
  searchPokemons: PropTypes.func.isRequired,
};

// == Export
export default App;
