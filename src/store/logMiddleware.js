import axios from 'axios';
import { GO_SEARCH_POKEMONS, putPokemonsInData, putDataWithId } from 'src/store/reducer';
import { startLoading, finishLoading } from './reducer';

const logMiddleware = store => next => (action) => {
  //console.log('Je suis le middleware, et je laisse passer cette action: ', action);
 // next(action);

  switch (action.type) {
    case GO_SEARCH_POKEMONS: {
      store.dispatch(startLoading());
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
        store.dispatch(finishLoading());
      });
      break;
    }
    default:
      next(action);
  }
};

export default logMiddleware;
