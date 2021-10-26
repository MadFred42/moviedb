import { makeAutoObservable, toJS } from "mobx";
import { FindMovieByImdbId, FindPopularMovies } from "../services/movie-service";
import { IMovie, IMovies } from "../types/types";

export default class MovieStore {
    imdbMovies: any;
    popularMovies: any;


    constructor() {
        this.imdbMovies = [];
        this.popularMovies = [];
        makeAutoObservable(this);
    }

    setImdbMovie(movie: IMovie[]) {
        this.imdbMovies.push(movie)
    }

    setPopularMovies(movies: IMovies[]) {
        console.log("hi");
        movies.map(async (movie) => {
           const response = await FindMovieByImdbId(movie.imdb_id);
           
           this.setImdbMovie(response);
        })
    }

    get allPopularMovies() {
        return toJS(this.popularMovies);
    }

    get allImdbMovies() {
        return toJS(this.imdbMovies);
    }

    async getPopualarMovies() {
        try {
            const response = await FindPopularMovies();
            
            this.setPopularMovies(response);
        } catch (e) {
            console.log(e);
        }
    }

    async getImdbMovie() {
        try {
            let response;
            console.log(this.getPopualarMovies);
            for (let i = 0; i < this.allPopularMovies.length; i++) {
                const response = await FindMovieByImdbId(this.allPopularMovies[i]);
                // this.setImdbMovie(response);
            }
            
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }
}