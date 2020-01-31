// == Import : npm
import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local
import './inputField.scss';

// == Composant
const InputField = ({ inputField, searchLoading, changeInputValue }) => {
    const handleChange = e => {
        const { value, name } = e.target;
        changeInputValue(value, name);
    }
    return (
        <div id="inputField">
            <Input 
              loading={searchLoading}
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
    searchLoading: PropTypes.bool.isRequired,
};

// == Export
export default InputField;