export const moviesApi = async (page: number) => {
  try {
const data = await fetch(`https://back-end-react-movie.onrender.com/${page}`).then((r)=> r.json())
      return data as IMovies[]
  } catch (err: any) {
    console.error(`[TmdbAPI] [moviesApi] : ${err.message}`)

    return []
  }
}

export const moviesTopRatedApi = async (page: number) => {
  try {
    const data = await fetch(`https://back-end-react-movie.onrender.com/toprated/${page}`).then((r) => r.json())

    return data as IMovieDetail[]
  } catch (err: any) {
    console.error(`[TmdbAPI] [moviesTopRatedApi] : ${err.message}`)

    return []
  }
}

export const moviesUpcomingApi = async (page: number) => {
  try {
    const  data = await fetch(`https://back-end-react-movie.onrender.com/upcoming/${page}`).then((r) =>r.json())

    return data as IMovieDetail[]
  } catch (err: any) {
    console.error(`[TmdbAPI] [moviesUpcomingApi] : ${err.message}`)

    return []
  }
}

export const moviesSimilarApi = async (page: number, imdbId: string | null) => {
  if (imdbId) {
    try {
      const data = await fetch(`https://back-end-react-movie.onrender.com/similar/${imdbId}/${page}`).then((r) =>r.json())

      return data as IMovies[]
    } catch (err: any) {
      console.error(`[TmdbAPI] [similarMoviesApi] : ${err.message}`)

      return []
    }
  } else {
    console.error(`[TmdbAPI] [similarMoviesApi] : imdbID : ${imdbId} is not recognize`)

    return []
  }
}

export const moviesSearchApi = async (page: number, query: string | null ) => {
  if (!query || query === "" || query === " " || query === undefined) {
    return await moviesApi(page) as IMovies[]
  } else {
    try {
      const data = await fetch(`https://back-end-react-movie.onrender.com/movie/search/${query}/${page}}`).then((r) => r.json())
  
      return data as IMovies[]
    } catch (err: any) {
      console.error(`[TmdbAPI] [moviesSearchApi] : ${err.message}`)
  
      return [] as IMovies[]
    }
  }

}

export const moviesDetailApi = async (imdbId: string) => {
  if (imdbId) {
    try {
      const  data  = await fetch(`https://back-end-react-movie.onrender.com/movie/${imdbId}`).then((r) =>r.json())

      return data as IMovieDetail
    } catch (err: any) {
      console.error(`[TmdbAPI] [moviesDetailApi] : ${err.message}`)

      return {} as IMovieDetail
    }
  } else {
    console.error(`[TmdbAPI] [moviesDetailApi] : imdbID : ${imdbId} is not recognize`)

    return {} as IMovieDetail
  }
}

export const actorMovie = async (imdbId: string) => {
  if (imdbId) {
    try {
      const data  = await fetch(`https://back-end-react-movie.onrender.com/actors/${imdbId}`).then((r) =>r.json())

      return data as IActors[]
    } catch (err: any) {
      console.error(`[TmdbAPI] [actorMovie] : ${err.message}`)

      return []
    }
  } else {
    console.error(`[TmdbAPI] [actorMovie] :  imdbID : ${imdbId} is not recognize`)

    return []
  }
}
