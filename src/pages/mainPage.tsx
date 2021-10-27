import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import MoviesList from '../components/moviesList';
import { IMovie } from '../types/types';

const MainPage = observer(() => {
    const movieStore: any = useContext(Context);
    console.log('hi');
    return (
        <div className="row row-cols-1 row-cols-md-3 p-3 g-4 justify-content-around" style={{width: '80%', margin: '0 auto'}}>
            {movieStore.imdbMovies.map((movie: IMovie) => {
                return <MoviesList key={movie.imdb_id} results={movie} />
            })}
        </div>
    );
});

export default MainPage;