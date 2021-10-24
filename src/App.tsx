import React, { useEffect, useState } from 'react';
import MoviesList from './components/moviesList';
import { findMovieByImdbId, findPopularMovies } from './services/movie-service';
import { IMovie, IMovies } from './types/types';

const App = () => {
  const [movies, setMovies] = useState<IMovies[]>();
  const [movie, setMovie] = useState<IMovie[]>();
  useEffect(() => {
    findPopularMovies()
    .then(setMovies);
  }, []);

  useEffect(() => {
    movies?.map(movie => {
      return findMovieByImdbId(movie.imdb_id)
      .then(setMovie)
    })
  }, []);
  console.log(movie);
  return (
    <div>
      {movies?.map(movie => {
        return <MoviesList key={movie.imdb_id} results={movie} />
      })}
    </div>
  );
}

export default App;
