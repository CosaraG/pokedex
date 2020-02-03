// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PokemonsList from 'src/components/PokemonsList';

// Action Creators
import { putDataWithId } from 'src/store/reducer';

const mapStateToProps = ({ pokemonsData, filtredPokemonsData, pokemonsWithId }) => ({
  pokemonsData,
  filtredPokemonsData,
  pokemonsWithId,
  
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  putDataWithId: (value) => {
    dispatch(putDataWithId(value));
  },
});

// Container
const PokemonsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonsList);

// == Export
export default PokemonsListContainer;

