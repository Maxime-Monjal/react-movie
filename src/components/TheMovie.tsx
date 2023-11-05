import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"
import { actorMovie, moviesDetailApi } from "../services/TmdbAPI"
import { timeConvert } from "../utilities/timeConvert"
import { GridActor } from "./GridActor"
import { Loader } from "./Loader"

export const TheMovie = () => {
  const { imdbID = "" } = useParams<string>()

  const { data: movieDetail , isLoading } = useQuery<IMovieDetail, boolean>(
    [`movie-detail-${imdbID}`, imdbID],
    () => moviesDetailApi(imdbID),
    {
      refetchOnWindowFocus: false,
      enabled: !!imdbID,
      staleTime: 10 * (60 * 1000), // 10 mins
    }
  )

  const { data: actors = [], isLoading: onLoad } = useQuery<IActors[], boolean>(
    [`actor-movie-${imdbID}`, imdbID],
    () => actorMovie(imdbID),
    {
      refetchOnWindowFocus: false,
      enabled: !!imdbID,
      staleTime: 10 * (60 * 1000), // 10 mins
    }
  )

  const {id,title, backdrop_path, tagline, overview, release_date, vote_average, vote_count, runtime, budget, revenue, genres} = movieDetail ?? {} 

  return (
    <>
     {isLoading  ? 
     <Loader />
      :
      <>
      {movieDetail && (
        <div key={`${title}-${id}`}>
          <h1 className="text-3xl pt-4 px-4 text-center">
            {title}
          </h1>
          <img className="max-w-screen-xl w-full mx-auto pt-4 px-4" src={backdrop_path ?
                `https://image.tmdb.org/t/p/original${backdrop_path}`
              : `https://placehold.co/1248x702?text=Pas+de+photo+disponible+pour%5Cn${title}`
          } alt={title}  width="500" height="500" loading="lazy"/>
          <h2 className="text-2xl pt-4 px-4 text-center">
            {tagline}
          </h2>
          <p className="max-w-screen-xl mx-auto pt-2 px-4">
            {overview}
          </p>
          <div className="flex flex-col w-full text-center place-content-center max-w-screen-xl mx-auto">
            <p className="max-w-screen-xl pt-4 px-4">
              Sorti le:{" "}
              <strong>
                {release_date && new Date(release_date).toLocaleDateString("fr")}
              </strong>
            </p>
            <p className="max-w-screen-xl pt-4">
              Note: <strong>{vote_average} / 10</strong>
            </p>
            <p className="max-w-screen-xl pt-4">
              Nombre de vote: <strong>{vote_count}</strong>
            </p>
            <p className="max-w-screen-xl pt-4">
              Durée du film: <strong>{runtime && timeConvert(runtime)}</strong>
            </p>
            <p className="max-w-screen-xl pt-4">
              Budget:{" "}
              {budget ? (
                <strong>{budget.toLocaleString()} $</strong>
              ) : (
                <strong>Non renseigné</strong>
              )}
            </p>

            <p className="max-w-screen-xl pt-4">
              Revenus générés:{""}
              {revenue ? (
                <strong> {revenue.toLocaleString()} $</strong>
              ) : (
                <strong>Non renseigné</strong>
              )}
            </p>
            <div className="max-w-screen-xl pt-4">
              Genre :
              <div className="">
                {genres &&
                  genres.map((genre: any) => (
                    <span key={genre.id} className="px-2">
                      <strong className="inline-block">{genre.name}</strong>
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-4 max-w-screen-xl mx-auto">
            <Link className="pt-4 self-center" to={`/similar/${id}`} onClick={() => window.location.href = `/similar/${id}`}>
              <button className="bg-indigo-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-indigo-100 rounded-full hover:shadow-lg hover:bg-indigo-600">
                Voir des films similaires à {title}
              </button>
            </Link>
          </div>
          <GridActor actors={actors} onLoad={onLoad} />
        </div>
      )}
      </>
}
    </>
  )
}
