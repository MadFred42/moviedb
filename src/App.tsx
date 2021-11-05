import React, { useContext, useEffect } from 'react';
import { Context } from '.';
import NavBar from './components/navBar';
import { MainPage, MoviePage } from './pages';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { allGenres } from './genres';

const App = () => {
  const { movieStore } = useContext(Context);

  useEffect(() => {
      movieStore.setSubject(localStorage.getItem('subject'));
      if(movieStore.subject === 'byPopularity') {
        console.log('again');
        movieStore.getMoviesBySubject('byPopularity');
      }
  }, []);
  
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route path='/' component={ MainPage } exact />
          <Route path='/movie/:id' component={ MoviePage } />
          <Route path='/upcoming' component={ MainPage } />
          <Route path='/toprated' component={ MainPage } />
        </Switch>
      </Container>
    </>
  );
};

export default App;