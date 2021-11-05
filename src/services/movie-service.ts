import axios from "axios";
import { IMovie, IMovies } from "../types/types";

export const FindPopularMovies = async () => {
  const url = 'https://data-imdb1.p.rapidapi.com/movie/order/byPopularity/';
  const response = await axios.get<{ results: IMovies[] }>(url, {
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'ed88023110msh876b7e3769c4bc5p1157adjsn0672b9122c03'
    }
  });

  return response.data.results;
};

export const FindMovieByImdbId = async (id: string) => {
  const url = `https://data-imdb1.p.rapidapi.com/movie/id/${id}/`
  
  const response = await axios.get<{results: IMovie[]}>(url, {
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'ed88023110msh876b7e3769c4bc5p1157adjsn0672b9122c03'
    }
  });
  
  return response.data.results;
};

export const FindMovie = async (subject: string) => {
  const url = `https://data-imdb1.p.rapidapi.com/movie/order/${subject}/`;
  
  const response = await axios.get<{results: IMovie[]}>(url, {
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'ed88023110msh876b7e3769c4bc5p1157adjsn0672b9122c03'
    }
  });
  
  return response.data.results;
};

export const FindMovieByGenre = async (genre: string) => {
  const url = `https://data-imdb1.p.rapidapi.com/movie/byGenre/${genre}/`;
  
  const response = await axios.get<{results: IMovie[]}>(url, {
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'ed88023110msh876b7e3769c4bc5p1157adjsn0672b9122c03'
    }
  });
  
  return response.data.results;
};