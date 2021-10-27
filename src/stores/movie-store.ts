import { makeAutoObservable, toJS } from "mobx";
import { findActorsFulInfo, findMovieActors, FindMovieByImdbId, FindPopularMovies } from "../services/movie-service";
import { IActor, IMovie, IMovies, IRoles } from "../types/types";

export default class MovieStore {
    _actors: any;
    _genres: any;
    _imdbMovies: any;
    _movie: any;
    _movies: any;
    _roles: any;

    constructor() {
        this._actors = [];
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
        this._roles = [];
        makeAutoObservable(this);
    };

    setActors(actors: IActor) {
        this._actors.push(actors);
    }

    setImdbMovie(movie: IMovie[]) {
        this._imdbMovies.push(movie)
        localStorage.setItem('movies', JSON.stringify(this.imdbMovies));
    };

    setMovie(movie: IMovie[]) {
        this._movie = movie;
    };

    setMovies(movies: IMovies[]) {
        this._movies = movies;
    };

    setRoles(roles: IRoles) {
        this._roles = roles;
    }

    get actors() {
        return toJS(this._actors);
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

    get roles() {
        return toJS(this._roles);
    }

    getMovieByImdbId(movies: IMovies[]) {
        movies.map(async (movie) => {
           const response = await FindMovieByImdbId(movie.imdb_id);
           
           this.setImdbMovie(response);
        });
    };

    getActorsFullInfo(actors: any) {
        actors.map(async (actor: any) => {
            const response = await findActorsFulInfo(actor.actor.imdb_id);
            response.role = actor.role
            this.setActors(response);
        })
    }

    async getMovie(movie: string) {
        const local: any = localStorage.getItem('movies');
        const movies = JSON.parse(local);
        const result = movies.find((item: any) => item.imdb_id === movie);
        this.setMovie(result);
    };

    async getActors(id: string) {
        try {
            const response = await findMovieActors(id);
            if (!response) {
                return;
            }
            this.setRoles(response);
            this.getActorsFullInfo(response);
        } catch (e) {
            console.log(e);
        }
    }

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