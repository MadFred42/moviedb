import React from 'react';
import { IMovie } from '../../types/types';
interface MoviesPropsList {
    results: IMovie
}

const MoviesList= ({ results }: MoviesPropsList) => {
    return (
        <div className="card mb-0" style={{maxWidth: "540px"}}>
            <div className="row g-0" >
                <div className="col-md-4">
                    <img src={results.banner} className="img-fluid rounded-start" alt="banner" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{results.title}</h5>
                        <p className="card-text">{results.plot}</p>
                        <p className="card-text"><h6>Rating: </h6><small className="text-muted">{results.rating} <i className='fas fa-star' /></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default MoviesList;

