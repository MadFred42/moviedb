import { makeAutoObservable, toJS } from "mobx";
import { FindMovieByImdbId, FindPopularMovies } from "../services/movie-service";
import { IMovie, IMovies } from "../types/types";

export default class MovieStore {
    _genres: any;
    _imdbMovies: any;
    _movie: any;
    _movies: any;

    constructor() {
        this._genres = [
            'Action',
            'Adventure',
            'Animation',
            'Biography',
            'Comedy',
            'Crime',
            'Drama',
            'Family',
            'Fantasy',
            'Film-Noir',
            'History',
            'Horror',
            'Music',
            'Musical',
            'Mystery',
            'Romance',
            'Sci-Fi',
            'Sport',
            'Thriller',
            'War',
            'Western'];
        this._imdbMovies = [];
        this._movie = {};
        this._movies = [];
        makeAutoObservable(this);
    };

    setMovie(movie: IMovie[]) {
        this._movie = movie;
    };

    setMovies(movies: IMovies[]) {
        this._movies = movies;
    };

    setImdbMovie(movie: IMovie[]) {
        this._imdbMovies.push(movie)
        localStorage.setItem('movies', JSON.stringify(this.imdbMovies));
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
        movies.map(async (movie) => {
           const response = await FindMovieByImdbId(movie.imdb_id);
           
           this.setImdbMovie(response);
        });
    };

    getMovie(movie: string) {
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