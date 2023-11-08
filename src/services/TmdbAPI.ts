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

export const movieDetailApi = async (imdbId: string) => {
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

export const actorsMovie = async (imdbId: string) => {
  if (imdbId) {
    try {
      const data  = await fetch(`https://back-end-react-movie.onrender.com/actors/${imdbId}`).then((r) =>r.json())

      return data as IActors[]
    } catch (err: any) {
      console.error(`[TmdbAPI] [actorsMovie] : ${err.message}`)

      return []
    }
  } else {
    console.error(`[TmdbAPI] [actorsMovie] :  imdbID : ${imdbId} is not recognize`)

    return []
  }
}


export const actorDetail = async (imdbId: string)   =>  {
  if (imdbId) {
    try {
      const actor  = await fetch(`https://back-end-react-movie.onrender.com/actor/${imdbId}`).then((r) =>r.json())

      const actorDetail = actor[0]
      const externalID = actor[1]
      const filmography =  actor[2].cast.sort((a: IFilmography, b: IFilmography) => {
        const dateA = new Date(a.release_date).getTime()
        const dateB = new Date(b.release_date).getTime()
        return dateB - dateA
      })

      return {actorDetail, externalID, filmography} as IActor
    } catch (err: any) {
      console.error(`[TmdbAPI] [actorDetail] : ${err.message}`)

      return {} as IActor
    }
  } else {
    console.error(`[TmdbAPI] [actorDetail] :  imdbID : ${imdbId} is not recognize`)

    return {} as IActor
  }
}
