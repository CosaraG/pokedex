// == Import : npm
import { connect } from 'react-redux';

// == Import : local
console.log('container');

import App from 'src/components/App';

// Action Creators
import { goSearchPokemons, filtredPokemonsData } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  loadingStatus: state.loadingStatus,
}) ;


const mapDispatchToProps = (dispatch, ownProps) => ({
  searchPokemons: () => {
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


