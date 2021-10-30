import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Context } from '..';
import Movie from '../components/movieInfo/';
import { IParams } from '../types/types';

export const MoviePage = () => {
    const { movieStore, creatorsStore } = useContext(Context);
    const params: IParams = useParams();

    useEffect(() => {
        movieStore.getMovie(params.id);
    }, []);
    
    useEffect(() => {
        creatorsStore.getActors(params.id);
    }, []);
    
    return (
        <Movie />
    )
};