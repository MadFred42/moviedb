import { makeAutoObservable, toJS } from "mobx";
import { allGenres } from "../genres";
import { FindMovieByImdbId, FindPopularMovies } from "../services/movie-service";
import { IMovie, IMovies } from "../types/types";

export default class MovieStore {
    _genres: any;
    _imdbMovies: any;
    _movie: any;
    _movies: any;

    constructor() {
        this._genres = allGenres;
        this._imdbMovies = [];
        this._movie = {};
        this._movies = [];
        
        makeAutoObservable(this);
    };

    setImdbMovie(movie: IMovie[]) {
        this._imdbMovies = movie;
        localStorage.setItem('movies', JSON.stringify(this.imdbMovies));
    };

    setMovie(movie: IMovie) {
        this._movie = movie;
    };

    setMovies(movies: IMovies[]) {
        this._movies = movies;
    };
    get genres() {
        return toJS(this._genres);
    }

    get movie() {
        return toJS(this._movie);
    }

    get imdbMovies() {
        return toJS(this._imdbMovies);
    };

    getMovieByImdbId(movies: IMovies[]) {
        const result = movies.map(async (movie) => {
           return await FindMovieByImdbId(movie.imdb_id);
        });
        Promise.all(result)
            .then((item: any[]) => this.setImdbMovie(item))
            .catch((e: string) => console.log(e));
    };

    async getMovie(movie: string) {
        const local: any = localStorage.getItem('movies');
        const movies = JSON.parse(local);
        const result = movies.find((item: any) => item.imdb_id === movie);
        this.setMovie(result);
    };

    async getMovies() {
        try {
            const response = await FindPopularMovies();
            this.setMovies(response);
            this.getMovieByImdbId(response);
        } catch (e) {
            console.log(e);
        }
    };
};