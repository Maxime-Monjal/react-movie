import { Loader } from "./Loader"

export const GridActor = ({actors, onLoad}: {actors: IActors[], onLoad: boolean}) => {
  return (
    <>
      {actors.length > 1 && <h3 className="text-3xl text-center pt-4 px-4">Acteur</h3>}
      <div className="pt-8">
        {onLoad && <Loader  /> }

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 max-w-screen-xl mx-auto">
          {actors &&
            actors.map(({name, id,profile_path,character}) => (
              <div className="mb-10 mx-4 shadow-2xl" key={`${name}-${id}`}>
                <img  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : `https://placehold.co/282x423?text=Pas+de+photo+disponible+pour%5Cn${name}`
                  }
                  alt={profile_path ? name : `Pas de photo disponible pour ${name}`} loading="lazy"/>
                <p className="text-center py-2 font-semibold	">{name}</p>
                <p className="text-center pb-2">{character}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
