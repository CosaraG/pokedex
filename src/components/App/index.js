// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import InputField from 'src/containers/InputField';
import PokemonsList from 'src/containers/PokemonsList';

// == Composant
const App = () => (
  <div id="app">
    <InputField />
    <PokemonsList />
  </div>
);

// == Export
export default App;
