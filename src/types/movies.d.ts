declare type IMovies = {
  adult: boolean;
  id: number;
  backdrop_path: string;
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

declare type IMovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  homepage: string;
  id: number;
  genres: [{ id: number; name: string }];
  production_companies: [
    { id: number; name: string; logo_path: string; origin_country: string }
  ];
  production_countries: [{ iso_3166_1: string; name: string }];
  spoken_languages: [{ iso_639_1: string; name: string; english_name: string }];
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
