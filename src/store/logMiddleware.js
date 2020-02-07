import axios from 'axios';
import {
  GO_SEARCH_POKEMONS, putPokemonsInData, putDataWithId, SEARCH_DETAILS,
  addPoksDetails, changeFace, personalLoading, loading
} from 'src/store/reducer';

const logMiddleware = store => next => (action) => {
  //console.log('Je suis le middleware, et je laisse passer cette action: ', action);
 // next(action);

  switch (action.type) {
    case GO_SEARCH_POKEMONS: {
      store.dispatch(loading());
      axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=784')
        .then(response => {
           //console.log('res',response.data.results);
          const { results } = response.data;
          store.dispatch(putPokemonsInData(results));
          store.dispatch(putDataWithId());
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        store.dispatch(loading());
      });
      break;
    }
    case SEARCH_DETAILS: {
      const { pokemonId } = store.getState();   
      console.log('pokemonId', pokemonId);
       
      store.dispatch(personalLoading(pokemonId));
      axios.get(`https://pokeapi.co/api/v2/pokemon/${store.getState().pokemonId}/`)
        .then(response => {
           console.log('res',response.data);
           const res = {
            id: response.data.id,
            speedName: response.data.stats[0].stat.name,
            speedStat: response.data.stats[0].base_stat,
            defenceName: response.data.stats[3].stat.name,
            defenceStat: response.data.stats[3].base_stat,
            atackName: response.data.stats[4].stat.name,
            atackStat: response.data.stats[4].base_stat,
            weightName: 'weight',
            weightStat: response.data.weight,            
           }
          store.dispatch(addPoksDetails(res));
          store.dispatch(changeFace(res.id));
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        store.dispatch(personalLoading(pokemonId));

      });
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;
