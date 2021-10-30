import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import MoviesList from '../components/moviesList';
import SpinnerModel from '../components/spinnerModel';
import { IMovie } from '../types/types';

export const MainPage = observer(() => {
    const { movieStore }: any = useContext(Context);
    
    return (
        <div className={movieStore.imdbMovies.length === 0 ? 'd-flex justify-content-center' : ''}>
            {
                movieStore.imdbMovies.length === 0 ?
                <SpinnerModel height={'20em'} marginTop={'10%'} width={'20em'} /> :
                <div 
                    className=" g-4 justify-content-around p-3 row row-cols-1 row-cols-md-3" 
                    style={{ margin: '0 auto', width: '80%' }}
                >
                    { movieStore.imdbMovies.map((movie: IMovie) => {
                        return <MoviesList key={ movie.imdb_id } results={ movie } />
                    })}
                </div>
            }
        </div>    
    );
});