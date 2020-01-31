// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import PokemonsList from 'src/components/PokemonsList';

// Action Creators
//import { } from 'src/store/reducer';

const mapStateToProps = ({ pokemonsData }) => ({
  pokemonsData,
  
});


const mapDispatchToProps = (dispatch, ownProps) => ({

});

// Container
const PokemonsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonsList);

// == Export
export default PokemonsListContainer;

