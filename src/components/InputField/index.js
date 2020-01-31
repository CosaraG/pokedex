// == Import : npm
import React from 'react';
import { Input } from 'semantic-ui-react'

// == Import : local
import './inputField.scss';

// == Composant
const InputField = () => (
  <div id="inputField">
      <Input loading={false} placeholder='Search...' />
  </div>
);

// == Export
export default InputField;