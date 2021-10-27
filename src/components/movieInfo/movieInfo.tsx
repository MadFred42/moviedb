import React, { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import ActorsList from './actorsList';

const MovieInfo = observer(() => {
    const movieStore = useContext(Context);
    const movie = movieStore.movie;

    if (!movie) {
        return <div>Loading...</div>
    }
    
    const ucFirst = (str: string) => {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
    }

    return (
        <div>
            <div className="card mb-3">
                <div className="border p-3 mb-2 bg-secondary text-white">
                    <h1 className="card-title">{movie.title}</h1>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">{ucFirst(movie.type)}</li>
                        <li className="list-group-item">{movie.content_rating}</li>
                        <li className="list-group-item">{movie.year }</li>
                    </ul>
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
            <div>
                <h2>Cast:</h2>
                <ActorsList />
            </div>
        </div>
    );
});

export default MovieInfo;