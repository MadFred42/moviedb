import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '..';
import Movie from '../components/movieInfo/';
import { IParams } from '../types/types';

const MoviePage = () => {
    const params: IParams = useParams();
    const movieStore = useContext(Context);

    useEffect(() => {
        movieStore.getMovie(params.id);
    }, []);
    
    useEffect(() => {
        movieStore.getActors(params.id);
    }, []);
    
    return (
        <Movie />
    )
};

export default MoviePage;