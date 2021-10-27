export interface IGenre {
    id: number;
    genre: string;
}

export interface IKeywords {
    keyword: string;
}

export interface IActor {
    imdb_id: string;
    image_url: string;
    name: string;
    role: string;
}

export interface IRoles {
    role: string;
    actor: IActor
}

export interface IActorsResults {
    roles: IRoles;
}

export interface IMovie {
    banner: string;
    content_rating: string;
    description: string;
    gen: IGenre;
    image_url: string;
    imdb_id: string;
    keywords: IKeywords;
    movie_length: number;
    plot: string;
    popularity: number;
    rating: number;
    title: string;
    type: string;
    year: number;
}

export interface IMovies {
    imdb_id: string;
    popularity: number;
    title: string;
}

export interface IParams {
    id: string;
}