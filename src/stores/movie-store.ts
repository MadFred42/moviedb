import { makeAutoObservable, toJS } from "mobx";
import { allGenres } from "../genres";
import { FindMovie, FindMovieByGenre, FindMovieByImdbId, FindPopularMovies } from "../services/movie-service";
import { IMovie, IMovies } from "../types/types";

export default class MovieStore {
    _genres: any;
    _imdbMovies: any;
    _movie: any;
    _subject: any;

    constructor() {
        this._genres = allGenres;
        this._imdbMovies = [];
        this._movie = {};
        this._subject = 'byPopularity';
        
        makeAutoObservable(this);
    };

    setImdbMovie(movie: IMovie[]) {
        this._imdbMovies = movie;
        localStorage.setItem('movies', JSON.stringify(this.imdbMovies));
    };

    setMovie(movie: IMovie) {
        this._movie = movie;
    };

    setSubject(subject: string | null) {
        this._subject = subject;
    }

    get genres() {
        return toJS(this._genres);
    }

    get movie() {
        return toJS(this._movie);
    }

    get imdbMovies() {
        return toJS(this._imdbMovies);
    };

    get subject() {
        return this._subject;
    }

    getMovieByImdbId(movies: IMovies[]) {
        const result = movies.map(async (movie) => {
           return await FindMovieByImdbId(movie.imdb_id);
        });
        Promise.all(result)
            .then((item: any[]) => this.setImdbMovie(item))
            .catch((e: string) => console.log(e));
    };

    async getMovie(movie: string) {
        const localMoives: any = localStorage.getItem('movies');
        const movies = JSON.parse(localMoives);
        const result = movies.find((item: any) => item.imdb_id === movie);
        this.setMovie(result);
    };

    async getMoviesBySubject(subject: string) {
        try {
            localStorage.setItem('subject', subject);
            this.setSubject(subject);
            const response = await FindMovie(subject);
            console.log(response);
            this.getMovieByImdbId(response);
        } catch (e) {
            console.log(e);
        }
    };

    async getMoviesByGenre(subject: string, genre: string) {
        try {
            localStorage.setItem('subject', subject);
            this.setSubject(subject);
            const response = await FindMovieByGenre(genre);
            this.getMovieByImdbId(response);
        } catch (e) {
            console.log(e);
        }
    };
};