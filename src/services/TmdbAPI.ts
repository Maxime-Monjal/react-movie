import axios from "axios";

export const moviesApi = async (page: number) => {
  try {
    const { data } = await axios.get<IMovieDetail[]>(
      `https://react-movie-backend.herokuapp.com/${page}`
    );

    return data;
  } catch (err: any) {
    console.error(`[TmdbAPI] [moviesApi] : ${err.message}`);

    return [];
  }
};

export const moviesDetailApi = async (imdbId: string) => {
  if (imdbId) {
    try {
      const { data } = await axios.get<IMovieDetail>(
        `https://react-movie-backend.herokuapp.com/movie/${imdbId}`
      );

      return data;
    } catch (err: any) {
      console.error(`[TmdbAPI] [moviesDetailApi] : ${err.message}`);

      return null;
    }
  } else {
    console.error(`[TmdbAPI] [moviesDetailApi] : ${imdbId} is not recognize`);

    return null;
  }
};

export const actorMovie = async (imdbId: string) => {
  if (imdbId) {
    try {
      const { data } = await axios.get<IActors[]>(
        `https://react-movie-backend.herokuapp.com/actors/${imdbId}`
      );

      return data;
    } catch (err: any) {
      console.error(`[TmdbAPI] [actorMovie] : ${err.message}`);

      return [];
    }
  } else {
    console.error(`[TmdbAPI] [actorMovie] : ${imdbId} is not recognize`);

    return [];
  }
};
