import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { actorMovie } from "../services/TmdbAPI";
import { Loader } from "./Loader";

export const GridActor = () => {
  const { imdbID = "" } = useParams();
  const { data: actors = [], isLoading } = useQuery<IActors[], boolean>(
    [`actor-movie-${imdbID}`, imdbID],
    () => actorMovie(imdbID),
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <h3 className="text-3xl text-center pt-4 px-4">Acteur</h3>
      <div className="pt-8">
        <Loader isLoading={isLoading} />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 max-w-screen-xl mx-auto">
          {actors &&
            actors.map((actor: IActors) => (
              <div
                className="mb-10 mx-4 shadow-2xl"
                key={`${actor.name}-${actor.id}`}
              >
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : "http://cvestavayer.ch/wp-content/upload/2020/01/CLUB_No_picture_available.png"
                  }
                  alt=""
                />
                <p className="text-center py-2">{actor.name}</p>
                <p className="text-center pb-2">Rôle: {actor.character}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
