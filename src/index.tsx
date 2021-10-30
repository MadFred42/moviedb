import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieStore from './stores/movie-store';
import CreatorsStore from './stores/creators-store';
import { BrowserRouter as Router } from 'react-router-dom';

const movieStore = new MovieStore();
const creatorsStore = new CreatorsStore();

export const Context = createContext({movieStore, creatorsStore});

ReactDOM.render(
  <Context.Provider value={{movieStore, creatorsStore}}>
    <Router>
      <App />
    </Router>
  </Context.Provider>,
  document.getElementById('root')
);
