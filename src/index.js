// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'

// == Import : local
import App from 'src/containers/App';
import store from 'src/store';
import { saveState } from './store/localStorage';

// store.subscribe(()=>{
//   saveState({
//     inputField: store.getState().inputField
//   })
// })

// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Le rendu de React => DOM
render(rootComponent, target);
