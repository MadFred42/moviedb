import React, { useContext, useEffect } from 'react';
import { Context } from '.';
import NavBar from './components/navBar';
import { MainPage, MoviePage } from './pages';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = () => {
  const { movieStore } = useContext(Context);

  useEffect(() => {
    movieStore.getMovies();
  }, []);
  
  return (
    <Container style={{ backgroundColor: '#424242', fontFamily: "'Roboto', sans-serif", height: '100%', zIndex: 0 }}>
      <NavBar />
      <Switch>
        <Route path='/' component={ MainPage } exact />
        <Route path='/movie/:id' component={ MoviePage } />
      </Switch>
    </Container>
  );
};

export default App;