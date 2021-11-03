import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import MoviesList from '../components/moviesList';
import SpinnerModel from '../components/spinnerModel';
import { IMovie } from '../types/types';

export const MainPage = observer(() => {
    const { movieStore }: any = useContext(Context);
    const mainClass = movieStore.imdbMovies.length === 0 ? 'd-flex justify-content-center' : 'd-flex justify-content-between';
    
    return (
        <div className={mainClass}>
            {
                movieStore.imdbMovies.length === 0 ?
                <SpinnerModel height={'15em'} marginTop={'10%'} width={'15em'} /> :
                <div 
                    className="g-4 justify-content-between row row-cols-1 m-0 w-100" 
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