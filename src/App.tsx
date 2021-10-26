import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Context } from '.';
import MoviesList from './components/moviesList';
import { IMovie, IMovies } from './types/types';

const App = observer(() => {
  const movieStore: any = useContext(Context);

  useEffect(() => {
    movieStore.getPopualarMovies();
  }, []);
  console.log(movieStore.allImdbMovies);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {movieStore.allImdbMovies.map((movie: IMovie) => {
        return <MoviesList key={movie.imdb_id} results={movie} />
      })}
    </div>
  );
});

export default App;
