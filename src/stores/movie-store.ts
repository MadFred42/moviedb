import { makeAutoObservable, toJS } from "mobx";
import { FindMovieByImdbId, FindPopularMovies } from "../services/movie-service";
import { IMovie, IMovies } from "../types/types";

export default class MovieStore {
    _imdbMovies: any;
    _movies: any;


    constructor() {
        this._imdbMovies = [];
        this._movies = [];
        makeAutoObservable(this);
    }

    setMovies(movies: IMovies[]) {
        this._movies = movies;
    }

    setImdbMovie(movie: IMovie[]) {
        this._imdbMovies.push(movie)
    }

    get imdbMovies() {
        return toJS(this._imdbMovies);
    }

    getMovieByImdbId(movies: IMovies[]) {
        movies.map(async (movie) => {
           const response = await FindMovieByImdbId(movie.imdb_id);
           
           this.setImdbMovie(response);
        })
    }

    async getMovies() {
        try {
            const response = await FindPopularMovies();
            
            this.setMovies(response);
            this.getMovieByImdbId(response);
        } catch (e) {
            console.log(e);
        }
    }
}