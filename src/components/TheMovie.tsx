import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { moviesDetailApi } from "../services/TmdbAPI";
import { timeConvert } from "../utilities/timeConvert";
import { GridActor } from "./GridActor";
import { Loader } from "./Loader";

export const TheMovie = () => {
  const { imdbID = "" } = useParams<string>();

  const { data: movieDetail = null, isLoading } = useQuery(
    [`movie-detail-${imdbID}`, imdbID],
    () => moviesDetailApi(imdbID),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <Loader isLoading={isLoading} />

      {movieDetail && (
        <div key={`${movieDetail.title}-${movieDetail.id}`}>
          <h1 className="text-3xl pt-4 px-4 text-center">
            {movieDetail.title}
          </h1>
          <img
            className="max-w-screen-xl w-full mx-auto pt-4 px-4"
            src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
            alt={movieDetail.title}
            width="500"
            height="500"
            loading="lazy"
          />
          <h2 className="text-2xl pt-4 px-4 text-center">
            {movieDetail.tagline}
          </h2>
          <p className="max-w-screen-xl mx-auto pt-2 px-4">
            {movieDetail.overview}
          </p>
          <div
            className="
            flex flex-col
            w-full
            text-center
            place-content-center
            max-w-screen-xl
            mx-auto
          "
          >
            <p className="max-w-screen-xl pt-4 px-4">
              Sorti le:{" "}
              <strong>
                {new Date(movieDetail.release_date).toLocaleDateString("fr")}
              </strong>
            </p>
            <p className="max-w-screen-xl pt-4">
              Note: <strong>{movieDetail.vote_average} / 10</strong>
            </p>
            <p className="max-w-screen-xl pt-4">
              Nombre de vote: <strong>{movieDetail.vote_count}</strong>
            </p>
            <p className="max-w-screen-xl pt-4">
              Durée du film: <strong>{timeConvert(movieDetail.runtime)}</strong>
            </p>
            <p className="max-w-screen-xl pt-4">
              Budget:{" "}
              {movieDetail.budget ? (
                <strong>{movieDetail.budget.toLocaleString()} $</strong>
              ) : (
                <strong>Non renseigné</strong>
              )}
            </p>

            <p className="max-w-screen-xl pt-4">
              Revenue généré:{""}
              {movieDetail.revenue ? (
                <strong> {movieDetail.revenue.toLocaleString()} $</strong>
              ) : (
                <strong>Non renseigné</strong>
              )}
            </p>
            <div className="max-w-screen-xl pt-4">
              Genre :
              <div className="">
                {movieDetail.genres &&
                  movieDetail.genres.map((genre: any) => (
                    <span key={genre.id} className="px-2">
                      <strong className="inline-block">{genre.name}</strong>
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-4 max-w-screen-xl mx-auto">
            <Link className="pt-4 self-center" to={"/"}>
              <button
                className="
                bg-indigo-500
                px-5
                py-3
                text-sm
                shadow-sm
                font-medium
                tracking-wider
                border
                text-indigo-100
                rounded-full
                hover:shadow-lg hover:bg-indigo-600
              "
              >
                Voir des films similaire à {movieDetail.title}
              </button>
            </Link>
          </div>
          <GridActor />
        </div>
      )}
    </>
  );
};
