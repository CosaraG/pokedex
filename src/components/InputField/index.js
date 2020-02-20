// == Import : npm
import React, { useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './inputField.scss';
import { loadState } from '../../store/localStorage';

// == Composant
const InputField = ({ 
    inputField, changeInputValue, filtredPokemonsData, showPokemons,
    setInputFieldFromStorage,
}) => {
    useEffect(()=>{
        console.log('newVal',loadState().inputField);        
        setInputFieldFromStorage(loadState().inputField);
    }, []);
    
    const handleChange = e => {
        const { value, name } = e.target;
        changeInputValue(value, name);
        filtredPokemonsData(value);
        showPokemons();
       // localStorage.setItem('inputField', value);
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
    setInputFieldFromStorage: PropTypes.func.isRequired,
};

// == Export
export default InputField;