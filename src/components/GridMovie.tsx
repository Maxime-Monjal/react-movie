import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";

type IGridMovieProps = {
  movies: IMovies[];
  isLoading: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const GridMovie = ({
  movies,
  isLoading,
  page,
  setPage,
}: IGridMovieProps) => {
  return (
    <div className="pt-8">
      <Loader isLoading={isLoading} />

      <div
        className="
              grid grid-cols-2
              gap-2
              sm:grid-cols-4 sm:gap-4
              max-w-screen-xl
              mx-auto
            "
      >
        {movies &&
          movies.map((movie: IMovies) => (
            <div
              className="mb-10 mx-4 bg-black cursor-pointer shadow-3xl hover:-translate-y-1 hover:scale-110 duration-300"
              key={movie.id}
            >
              <Link to={`/${movie.title.replace(/ /g, "_")}/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : `http://cvestavayer.ch/wp-content/uploads/2020/01/CLUB_No_picture_available.png`
                  }
                  alt={
                    movie.poster_path
                      ? `${movie.title}`
                      : "Pas de photo disponible"
                  }
                  width="500"
                  height="500"
                  loading="lazy"
                />
              </Link>
            </div>
          ))}
      </div>
      <>
        <button
          className="bg-indigo-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-indigo-100 rounded-full hover:shadow-lg hover:bg-indigo-600 mb-4 disabled:bg-slate-500"
          onClick={() => setPage((page) => Math.max(page - 1))}
          disabled={page === 1}
        >
          Page Précédente
        </button>
        <button
          className="bg-indigo-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider border text-indigo-100 rounded-full hover:shadow-lg hover:bg-indigo-600 mb-4 disabled:bg-slate-500"
          onClick={() => setPage(page + 1)}
        >
          Page Suivante
        </button>
      </>
    </div>
  );
};
