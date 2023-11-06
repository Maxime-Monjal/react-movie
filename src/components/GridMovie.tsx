import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"
import { Loader } from "./Loader"
import { SearchBar } from "./SearchBar"
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query"
import { Pagination } from "./Pagination"

type IGridMovieProps = {
  movies: IMovies[]
  isLoading: boolean
  page: number
  setPage: Dispatch<SetStateAction<number>>
  setSearchText: (text: string) => void
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<IMovies[], unknown>>
  isSearchBarIsVisible?: boolean
}

export const GridMovie = ({ movies, isLoading, page, setPage, setSearchText, refetch, isSearchBarIsVisible }: IGridMovieProps) => {

  return (
    <div className="py-4">
      <SearchBar setSearchText={setSearchText} refetch={refetch} isSearchBarIsVisible={isSearchBarIsVisible} />
      {isLoading ?
        <Loader />
        :
        <>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 max-w-screen-xl mx-auto">
            {movies?.map(({ id, poster_path, title }) => (
              <div className="mb-10 mx-4 bg-black cursor-pointer shadow-3xl hover:-translate-y-1 hover:scale-95 shadow-none duration-300" key={id} >
                <Link to={`/movie/${id}`}>
                  <img src={poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://placehold.co/276x414?text=Pas+de+photo+disponible+pour%5Cn${title}`
                  }
                    alt={poster_path
                      ? `${title}`
                      : `Pas de photo disponible pour ${title}`
                    }
                    width="500" height="500" loading="lazy"
                  />
                </Link>
              </div>
            ))}
          </div>

          <Pagination setPage={setPage} page={page} />
        </>
      }
    </div>
  )
}
