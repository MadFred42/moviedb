import React from 'react';
import { IMovies } from '../../types/types';

interface MoviesPropsList {
    results: IMovies
}

const MoviesList= ({ results }: MoviesPropsList) => {
    return (
        <div>
            {results.title}
        </div>
    );
}

export default MoviesList;