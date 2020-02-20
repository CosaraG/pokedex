// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import InputField from 'src/components/InputField';

// Action Creators
import { filtredPokemonsData, changeInputValue, showPokemons, setInputFieldFromStorage } from 'src/store/reducer';

const mapStateToProps = ({ inputField }) => ({
  inputField,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInputValue(value, name));    
  },
  filtredPokemonsData: (value) => {
    dispatch(filtredPokemonsData(value));
  },
  showPokemons: () => {
    dispatch(showPokemons());
  },
  setInputFieldFromStorage: (value) => {
    dispatch(setInputFieldFromStorage(value));
  },
});

// Container
const InputFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputField);

// == Export
export default InputFieldContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputField);
*/
