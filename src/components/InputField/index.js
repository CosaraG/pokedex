// == Import : npm
import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './inputField.scss';

// == Composant
class InputField extends React.Component {

    componentDidMount() {
        const { setInputFieldFromStorage } = this.props;
        const getFromStorage = localStorage['inputField'];
        console.log(getFromStorage);        
        setInputFieldFromStorage(getFromStorage);
    }

    componentDidUpdate() {
        const { inputField } = this.props;
        localStorage['inputField'] = inputField;
    }

    handleChange = e => {
        const { value, name } = e.target;
        const { changeInputValue, filtredPokemonsData, showPokemons } = this.props;
        changeInputValue(value, name);
        filtredPokemonsData(value);
        showPokemons();
    }
   
    render() {
        const {  inputField } = this.props;
        return (
            <div id="inputField">
                <Input 
                  value={inputField}
                  name="inputField"
                  placeholder='Search...'
                  onChange={this.handleChange}
              />
            </div>
        );
    }
};

InputField.propTypes = {
    inputField: PropTypes.string.isRequired,
    changeInputValue: PropTypes.func.isRequired,
    filtredPokemonsData: PropTypes.func.isRequired,
    showPokemons: PropTypes.func.isRequired,
    setInputFieldFromStorage: PropTypes.func.isRequired,
};

// == Export
export default InputField;