//import data from 'src/data/pokemons.js';

// == Initial State
const initialState = {
  inputField: '',
  loadingStatus: true,
  pokemonsData: [],
  pokemonsWithId: [],
  filtredPokemonsData: [],
  pokemonId: '',
  pokDetailsArray: [],
};

// == Types
const DO_SOMETHING = 'DO_SOMETHING';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_FACE = 'CHANGE_FACE';
const LOADING_TRUE = 'LOADING_TRUE';
const LOADING_FALSE = 'LOADING_FALSE';
const PUT_DATA_WITH_ID = 'PUT_DATA_WITH_ID';
const PUT_ID_IN_STORE = 'PUT_ID_IN_STORE';
const PUT_FILTRED_DATA = 'PUT_FILTRED_DATA';
const PUT_POKEMONS_IN_DATA = 'PUT_POKEMONS_IN_DATA';
const ADD_POKS_DETAILS = 'ADD_POKS_DETAILS';
const SHOW_POKEMONS = 'SHOW_POKEMONS';
export const GO_SEARCH_POKEMONS = 'GO_SEARCH_POKEMONS';
export const SEARCH_DETAILS = 'SEARCH_DETAILS';


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
    case CHANGE_FACE: {
      console.log(action.id);
      
      const newTask = state.filtredPokemonsData;
      const taskModified = newTask.map(item => {
        if(action.id == item.id) {
          return {
            ...item,
            face: !item.face,
          };
        }
        return item;
      });
      return {
        ...state,
        filtredPokemonsData: taskModified,
      };      
    }
      
    case LOADING_TRUE:
      return {
        ...state,
        loadingStatus: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loadingStatus: false,
      };
    case PUT_FILTRED_DATA:
      let filtredData = state.pokemonsData.filter(item => item.name.search(action.character) != -1);
      //console.log('filtred data', filtredData);      
      return {
        ...state,
        filtredPokemonsData: filtredData,
      };
    case PUT_ID_IN_STORE:
      return {
        ...state,
        pokemonId: action.id,
      };
    
    case PUT_POKEMONS_IN_DATA:
      return {
        ...state,
        pokemonsData: action.results,
      };
    case  ADD_POKS_DETAILS: {
      console.log(action.id);
      
      const newArr = state.filtredPokemonsData;
      const arrModified = newArr.map(item => {
        if(action.id == item.id) {
          return {
            ...item,
            speedName: action.speedName,
            speedStat: action.speedStat,
            defenceName: action.defenceName,
            defenceStat: action.defenceStat,
            atackName: action.atackName,
            atackStat: action.atackStat,
            weightName: action.weightName,
            weightStat: action.weightStat,
          };
        }
        return item;
      });
      return {
        ...state,
        filtredPokemonsData: arrModified,
      };      
    }
      
      // return {
      //   ...state,
      //   pokDetailsArray: [
      //     ...state.pokDetailsArray,
      //     action.data,
      //   ],  
      // };
    case SHOW_POKEMONS:
      return {
        ...state,
        pokemonsWithId: state.filtredPokemonsData,
      };

    case PUT_DATA_WITH_ID:
      state.pokemonsData.map(item => {
        const newStr = item.url.slice(34,-1);
        // console.log(newStr);
        item.id = newStr;
        item.face = true;
        //console.log(item);   
      });  
      //console.log('salllut', state.pokemonsData);       
      return {
        ...state,
        pokemonsWithId: state.pokemonsData,
        filtredPokemonsData: state.pokemonsData,

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
export const changeFace = (id) => ({
  type: CHANGE_FACE,
  id,
});
export const filtredPokemonsData = (character) => ({
  type: PUT_FILTRED_DATA,
  character,  
});
export const finishLoading = () => ({
  type: LOADING_FALSE,
});
export const goSearchPokemons = () => ({
  type: GO_SEARCH_POKEMONS,
});
export const startLoading = () => ({
  type: LOADING_TRUE,
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
export const searchDetails = () => ({
  type: SEARCH_DETAILS,
});
export const putIdInStore = (id) => ({
  type: PUT_ID_IN_STORE,
  id,
});
export const addPoksDetails = ({
  id, speedName, speedStat, defenceName, defenceStat,
  atackName, atackStat, weightName, weightStat
}) => ({
  type: ADD_POKS_DETAILS,
  id,
  speedName,
  speedStat,
  defenceName,
  defenceStat,
  atackName,
  atackStat,
  weightName,
  weightStat,
});

// == Selectors
//const filtredPokemonsData = state

// == Export
export default reducer;
