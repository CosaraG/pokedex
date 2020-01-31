// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import InputField from 'src/components/InputField';

// Action Creators
import { doSomething, changeInputValue } from 'src/store/reducer';

const mapStateToProps = ({ inputField, searchLoading }) => ({
  inputField,
  searchLoading,
  
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  changeInputValue: (value, name) => {
    dispatch(changeInputValue(value, name));
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
