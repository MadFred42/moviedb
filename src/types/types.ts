export interface ICreators {
    imdb_id: string;
    image_url: string;
    name: string;
    role: string;
}

export interface ICreatorsResults {
    roles: IRoles;
}

export interface IGenre {
    id: number;
    genre: string;
}

export interface IKeywords {
    keyword: string;
}

export interface IMovie {
    banner: string;
    content_rating: string;
    description: string;
    gen: IGenre[];
    image_url: string;
    imdb_id: string;
    keywords: IKeywords;
    movie_length: number;
    plot: string;
    popularity: number;
    rating: number;
    title: string;
    trailer: string;
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

export interface IRoles {
    role: string;
    actor: ICreators
}