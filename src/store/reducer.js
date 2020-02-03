//import data from 'src/data/pokemons.js';

// == Initial State
const initialState = {
  inputField: '',
  searchLoading: false,
  pokemonsData: [],
  pokemonsWithId: [],
  filtredPokemonsData: [],
};

// == Types
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const DO_SOMETHING = 'DO_SOMETHING';
const PUT_FILTRED_DATA = 'PUT_FILTRED_DATA';
const PUT_POKEMONS_IN_DATA = 'PUT_POKEMONS_IN_DATA';
const SHOW_POKEMONS = 'SHOW_POKEMONS';
export const GO_SEARCH_POKEMONS = 'GO_SEARCH_POKEMONS';

const PUT_DATA_WITH_ID = 'PUT_DATA_WITH_ID';



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
    case PUT_FILTRED_DATA:
      let filtredData = state.pokemonsData.filter(item => item.name.search(action.character) != -1);
      console.log('filtred data', filtredData);
      
      return {
        ...state,
        filtredPokemonsData: filtredData,
      };
    case PUT_POKEMONS_IN_DATA:
      return {
        ...state,
        pokemonsData: action.results,
      };
    case SHOW_POKEMONS:
      return {
        ...state,
        pokemonsWithId: state.filtredPokemonsData,
      };

    case PUT_DATA_WITH_ID:
      const res = state.pokemonsData.map(item => {
        const newStr = item.url.slice(34,-1);
       // console.log(newStr);
        item.id = newStr;
       //console.log(item);   
      });  
      console.log('salllut', state.pokemonsData);
       
      return {
        ...state,
        pokemonsWithId: state.pokemonsData,

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
export const showPokemons = () => ({
  type: SHOW_POKEMONS,
});

export const putDataWithId = () => ({
  type: PUT_DATA_WITH_ID,
});



// == Selectors
//const filtredPokemonsData = state
export const filtredPokemonsData = (character) => ({
  //const filtredData = data.filter(item => {item.name.search(character) != -1});
  type: PUT_FILTRED_DATA,
  character,  
});

// == Export
export default reducer;
