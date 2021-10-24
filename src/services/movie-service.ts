import axios from "axios";
import { IMovie, IMovies } from "../types/types";

export const findPopularMovies = async () => {
  const url = 'https://data-imdb1.p.rapidapi.com/movie/order/byPopularity/';
  const response = await axios.get<{ results: IMovies[] }>(url, {
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'ed88023110msh876b7e3769c4bc5p1157adjsn0672b9122c03'
    }
  });

  return response.data.results;
};

export const findMovieByImdbId = async (id: string) => {
  const url = `https://data-imdb1.p.rapidapi.com/movie/id/${id}/`
  
  const response = await axios.get<{results: IMovie[]}>(url, {
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'ed88023110msh876b7e3769c4bc5p1157adjsn0672b9122c03'
    }
  });

  return response.data.results;
}