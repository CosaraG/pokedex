// == Initial State
const initialState = {
  inputField: '', // input field for searching pokemon
  loadingStatus: false, // for showing the loading gif in the beggining
  pokemonsData: [], // array of pokemons without id
  pokemonsWithId: [], // array of pokemons with id
  filtredPokemonsData: [], // array of pokemons filtred
  pokDetailsArray: [], // details array of a pokemon
};

// == Types
const ADD_POKS_DETAILS = 'ADD_POKS_DETAILS';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'; // controlled field for state.inputField
const CHANGE_FACE = 'CHANGE_FACE'; // switches the sides of a card
const LOADING = 'LOADING'; // switches the loading status for state.loadingStatus
const PERSONAL_LOADING = 'PERSONAL_LOADING'; // switches the loading status for one pokemon
const PUT_DATA_WITH_ID = 'PUT_DATA_WITH_ID'; // fills the data with id
const PUT_FILTRED_DATA = 'PUT_FILTRED_DATA';
const PUT_POKEMONS_IN_DATA = 'PUT_POKEMONS_IN_DATA'; // fills the data from request response for state.pokemonsData
const SHOW_POKEMONS = 'SHOW_POKEMONS';
export const GO_SEARCH_POKEMONS = 'GO_SEARCH_POKEMONS'; // makes a request in MW for state.pokemonsData
export const SEARCH_DETAILS = 'SEARCH_DETAILS';
// makes a request in MW for state.pokDetailsArray


// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {  
      case ADD_POKS_DETAILS: {
        //console.log(action.id);        
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
      };
      case CHANGE_INPUT_VALUE:
        return {
          ...state,
        [action.name]: action.value,
      };
    case CHANGE_FACE: {
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
    };
    
      
    case LOADING:
      return {
        ...state,
        loadingStatus: !state.loadingStatus,
      };    
    case PERSONAL_LOADING: {
      const changedLoading = state.filtredPokemonsData.map(item=>{
        if(action.id == item.id) {
          return {
            ...item,
            personalLoading: !item.personalLoading,
          }
        };
        return item;
      });
      return {
        ...state,
        filtredPokemonsData: changedLoading,
      }; 
    };
    case PUT_FILTRED_DATA:
      let filtredData = state.pokemonsData.filter(item => item.name.search(action.character) != -1);
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
      state.pokemonsData.map(item => {
        const newStr = item.url.slice(34,-1);
        // console.log(newStr);
        item.id = newStr;
        item.face = true;
        item.personalLoading = false;
        //console.log(item);   
      });  
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
export const goSearchPokemons = () => ({
  type: GO_SEARCH_POKEMONS,
});
export const loading = () => ({
  type: LOADING,
});
export const putPokemonsInData = (results) => ({
  type: PUT_POKEMONS_IN_DATA,
  results,
});
export const showPokemons = () => ({
  type: SHOW_POKEMONS,
});
export const personalLoading = (id) => ({
  type: PERSONAL_LOADING,
  id,
});

export const putDataWithId = () => ({
  type: PUT_DATA_WITH_ID,
});
export const searchDetails = (id) => ({
  type: SEARCH_DETAILS,
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
export const exitFromCardDetails = (id) => ({
  type: CHANGE_FACE,
  id,
});

// == Selectors
const getDetails = (cards) => cards.filter(card => !card.face);
const getImages = (cards) => cards.filter(card => card.face);

export const getSortedList = cards => {
  const detailsList = getDetails(cards);
  const imagesList = getImages(cards);

  const sortedList = [
    ...detailsList,
    ...imagesList,
  ];
  return sortedList;
};


// == Export
export default reducer;
