import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieStore from './stores/movie-store';

const movieStore = new MovieStore();

export const Context = createContext(movieStore);

ReactDOM.render(
  <Context.Provider value={movieStore}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
