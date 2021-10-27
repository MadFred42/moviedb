import React, { useContext, useEffect } from 'react';
import { Context } from '.';
import NavBar from './components/navBar';
import { MainPage, MoviePage } from './pages';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const movieStore = useContext(Context);

  useEffect(() => {
    movieStore.getMovies();
  }, []);
  
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' component={MainPage} exact />
        <Route path='/movie/:id' component={MoviePage} />
      </Switch>
    </>
  );
};

export default App;
