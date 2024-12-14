export type TResponseArray<T> = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Array<T>;
};

export type TGenreResponse = {
  genres: TGenres[];
};

export type TMovieByList = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovieByDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: TBelongsToCollection;
  budget: number;
  genres: TGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: Array<string>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: TProductionCompanies[];
  production_countries: TProductionCountries;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: TSpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TBelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type TGenres = {
  id: number;
  name: string;
};

type TProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type TProductionCountries = {
  iso_3166_1: string;
  name: string;
};

type TSpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type TMovieReviews = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number | null;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};
