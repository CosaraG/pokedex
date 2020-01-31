//import data from 'src/data/pokemons.js';

// == Initial State
const initialState = {
  inputField: '',
  searchLoading: false,
  pokemonsData: [],
};

// == Types
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const DO_SOMETHING = 'DO_SOMETHING';
const PUT_POKEMONS_IN_DATA = 'PUT_POKEMONS_IN_DATA';
export const GO_SEARCH_POKEMONS = 'GO_SEARCH_POKEMONS';



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
        pokemonsData: action.results,
      };
    case PUT_POKEMONS_IN_DATA:
      return {
        ...state,
        pokemonsData: action.results,
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
export const goSearchPokemons = () => ({
  type: GO_SEARCH_POKEMONS,
});
export const putPokemonsInData = (results) => ({
  type: PUT_POKEMONS_IN_DATA,
  results,
});



// == Selectors


// == Export
export default reducer;
