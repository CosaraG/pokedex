// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PokemonsList from 'src/components/PokemonsList';

// Action Creators
 import { searchDetails, putIdInStore, changeFace } from 'src/store/reducer';

const mapStateToProps = ({ pokemonsWithId }) => ({
  pokemonsWithId,
  
});


const mapDispatchToProps = (dispatch) => ({
  searchDetails: (id) => () => {
    dispatch(putIdInStore(id));
    dispatch(searchDetails());
    
  },
});

// Container
const PokemonsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonsList);

// == Export
export default PokemonsListContainer;

