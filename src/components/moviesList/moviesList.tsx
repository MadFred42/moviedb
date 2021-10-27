import React from 'react';
import { IMovie } from '../../types/types';
import { useHistory } from 'react-router';

interface MoviesPropsList {
    results: IMovie
}

const MoviesList= ({ results }: MoviesPropsList) => {
    const history = useHistory();

    return (
        <div className="card mb-0 p-0" style={{maxWidth: "300px"}}>
            <img src={results.banner} className="img-fluid rounded-start" alt="banner" style={{height: '400px'}} />
            <div className="card-body" style={{margin: '0 auto'}} >
                <h4 
                    className="card-title" 
                    style={{cursor: 'pointer', textAlign: 'center'}}
                    onClick={() => history.push({pathname: `/movie/${results.imdb_id}`, state: {id: results.imdb_id}})}>
                        {results.title}
                </h4>
            </div>
            <div className='footer rounded d-flex' style={{backgroundColor: 'lightgray', margin: '0 auto'}}>
                    <i className="fas fa-star" style={{alignSelf: 'center', color: 'yellow', marginLeft: '5px'}} />
                    <big className="text" style={{color: 'black', margin: '0 .5em'}}>IMDb: {results.rating}</big>
            </div>
        </div>
    );
}



export default MoviesList;

