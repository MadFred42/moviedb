import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieStore from './stores/movie-store';
import { BrowserRouter as Router } from 'react-router-dom';

const movieStore = new MovieStore();

export const Context = createContext(movieStore);

ReactDOM.render(
  <Context.Provider value={movieStore}>
    <Router>
      <App />
    </Router>
  </Context.Provider>,
  document.getElementById('root')
);
