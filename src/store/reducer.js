import data from 'src/data/pokemons.js';

// == Initial State
const initialState = {
  inputField: '',
  searchLoading: false,
  pokemonsData: data,
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

// == Action Creators
export const doSomething = message => ({
  type: DO_SOMETHING,
  message,
});
export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});


// == Selectors


// == Export
export default reducer;
