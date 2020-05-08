// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
import InputField from 'src/containers/InputField';
import LoaderComponent from 'src/components/LoaderComponent';
import PokemonsList from 'src/containers/PokemonsList';

// == Composant
const App = ({ searchPokemons, loadingStatus }) => {
  useEffect(() => {
    searchPokemons(); // load the pokemons in the beggning of the app
  }, []);
  return (
    <div id="app">      
      {loadingStatus &&  <LoaderComponent active inline='centered' />}
      {!loadingStatus && (
        <>
          <InputField />
          <PokemonsList />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  searchPokemons: PropTypes.func.isRequired,
  loadingStatus: PropTypes.bool.isRequired,
};

// == Export
export default App;
