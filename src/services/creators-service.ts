import axios from "axios";
import { ICreators, ICreatorsResults } from "../types/types";

export const findMovieActors = async (id: string) => {
    const url = `https://data-imdb1.p.rapidapi.com/movie/id/${id}/cast/`;
  
    const response = await axios.get<{results: ICreatorsResults}>(url, {
      headers: {
        'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
        'x-rapidapi-key': 'ed88023110msh876b7e3769c4bc5p1157adjsn0672b9122c03'
      }
    });
    
    return response.data.results.roles;
  }
  
  export const findActorsFulInfo = async (id: string) => {
    const url = `https://data-imdb1.p.rapidapi.com/actor/id/${id}/`;
  
    const response = await axios.get<{results: ICreators}>(url, {
      headers: {
        'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
        'x-rapidapi-key': 'ed88023110msh876b7e3769c4bc5p1157adjsn0672b9122c03'
      }
    });
  
    return response.data.results;
  }