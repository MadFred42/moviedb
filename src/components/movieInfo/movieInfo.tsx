import React, { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import ActorsList from '../actorsList';
import CarouselModel from '../carouselModel';
import MovieInfoHeader from '../movieInfoHeader';

export const MovieInfo = observer(() => {
    const { movieStore } = useContext(Context);
    const { imdb_id, plot } = movieStore.movie;

    return (
        <div>
            <MovieInfoHeader />
            <div className="d-flex justify-content-between" style={{ height: '40em' }}>
                <CarouselModel props={ movieStore.movie } />
                <div className="d-block" style={{ width: '30%' }}>
                    <h2 style={{ textAlign: 'center' }}>Cast:</h2>
                    <div>
                        <ActorsList movieId={imdb_id}/>
                    </div>
                </div>
            </div>
            
            <div className="card-body" >
                <p className="card-text">{ plot }</p>
            </div>
            <button 
                className='btn btn-outline-secondary'
                onClick={() => window.open(`https://www.imdb.com/title/${imdb_id}/`)}>
                    Watch on IMDB
            </button>
        </div>
    );
});