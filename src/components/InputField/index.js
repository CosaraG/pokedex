// == Import : npm
import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './inputField.scss';

// == Composant
const InputField = ({ 
    inputField, changeInputValue, filtredPokemonsData, showPokemons,
}) => {
    const handleChange = e => {
        const { value, name } = e.target;
        changeInputValue(value, name);
        filtredPokemonsData(value);
        showPokemons();
    }
    return (
        <div id="inputField">
            <Input 
              value={inputField}
              name="inputField"
              placeholder='Search...'
              onChange={handleChange}
          />
        </div>
    );
} 

InputField.propTypes = {
    inputField: PropTypes.string.isRequired,
    changeInputValue: PropTypes.func.isRequired,
    filtredPokemonsData: PropTypes.func.isRequired,
    showPokemons: PropTypes.func.isRequired,
};

// == Export
export default InputField;