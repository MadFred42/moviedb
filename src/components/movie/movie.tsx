import React, { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const Movie = observer(() => {
    const movieStore = useContext(Context);
    const movie = movieStore.movie;

    if (!movie) {
        return <div>Loading...</div>
    }
    
    return (
        <div>
            <div className="card mb-3">
                <h1 className="card-title mx-auto">{movie.title}</h1>
                <div className="card-body d-flex justify-content-between mx-auto" style={{width: '5%'}}>
                    <p className="card-text">{movie.type}</p>
                    <p className="card-text">{movie.year}</p>
                </div>
                <img className="card-img-top" src={movie.banner} alt="cap" style={{height: '500px', margin: '0 auto', width: '400px'}} />
                <div className="card-body">
                    <p className="card-text">{movie.plot}</p>
                    <p className="card-text"><small className="text-muted">{movie.rating}</small></p>
                </div>
            </div>
            <button 
                className='btn btn-outline-secondary'
                onClick={() => window.open(`https://www.imdb.com/title/${movie.imdb_id}/`)}>
                    Watch on IMDB
            </button>
        </div>
    );
});

export default Movie;