// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import InputField from 'src/components/InputField';
import PokemonsList from 'src/components/PokemonsList';

// == Composant
const App = () => (
  <div id="app">
    <InputField />
    <PokemonsList />
  </div>
);

// == Export
export default App;
