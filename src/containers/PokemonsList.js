// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PokemonsList from 'src/components/PokemonsList';

// Action Creators
 import {
   searchDetails, putIdInStore, exitFromCardDetails, getSortedList
  } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  filtredPokemonsData: getSortedList(state.filtredPokemonsData), 
});


const mapDispatchToProps = (dispatch) => ({
  searchDetails: (id) => () => {
    dispatch(putIdInStore(id));
    dispatch(searchDetails());    
  },
  exitFromCardDetails: (id) => () => {
    dispatch(exitFromCardDetails(id));
  },
});

// Container
const PokemonsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonsList);

// == Export
export default PokemonsListContainer;

