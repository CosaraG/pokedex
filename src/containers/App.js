// == Import : npm
import { connect } from 'react-redux';

// == Import : local
console.log('container');

import App from 'src/components/App';

// Action Creators
import { goSearchPokemons, filtredPokemonsData } from 'src/store/reducer';

const mapStateToProps = ({  }) => ({
  
  
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  SearchPokemons: () => {
    dispatch(goSearchPokemons());
  },
  filtredPokemonsData: () => {
    dispatch(filtredPokemonsData());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;


