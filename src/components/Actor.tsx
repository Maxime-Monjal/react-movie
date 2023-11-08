import React, { Dispatch, SetStateAction } from "react"
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useQuery } from "react-query"
import { actorDetail } from "../services/TmdbAPI"
import { Loader } from "./Loader"
import { GridMovie } from "./GridMovie"
import useScrollToTop from "../hooks/useScrollToTop"
import { useParams } from "react-router-dom"
import { SocialNetwork } from "./SocialNetwork"

type ITheActor = {
    page: number
    setters: {
        setPage: Dispatch<SetStateAction<number>>
        setSearchText: (text: string) => void
        refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<IMovies[], unknown>>
    }
}

export const Actor = ({ page, setters }: ITheActor) => {
    const { imdbID = "" } = useParams<string>()
    const { data: actor, isLoading } = useQuery<IActor, boolean>(
        [`actor-detail-${imdbID}`],
        () => actorDetail(imdbID),
        {
            refetchOnWindowFocus: false,
            staleTime: 0,
            cacheTime: 0,
        }
    )

    useScrollToTop()

    const { name, biography, birthday, id, deathday, place_of_birth, homepage, profile_path } = actor?.actorDetail ?? {}
    const { facebook_id, instagram_id, tiktok_id, twitter_id, youtube_id } = actor?.externalID ?? {}
    const isExternaId = facebook_id || instagram_id || tiktok_id || twitter_id || youtube_id
    const movies = actor?.filmography ?? []

    return (
        <>{
            isLoading ? <Loader />
                :
                <div key={`${name}-${id}`}>
                    <h1 className="text-3xl pt-4 px-4 text-center">{name}</h1>
                    <img className="mb-10 mx-auto shadow-2xl" src={
                        profile_path
                            ? `https://image.tmdb.org/t/p/w500${profile_path}`
                            : `https://placehold.co/282x423?text=Pas+de+photo+disponible+pour%5Cn${name}`
                    }
                        alt={profile_path ? name : `Pas de photo disponible pour ${name}`} loading="lazy" />
                    <p className="max-w-screen-xl mx-auto pt-2 px-4">{biography}</p>
                    <div className="flex flex-col w-full text-center place-content-center max-w-screen-xl mx-auto">
                        {birthday && <p className="max-w-screen-xl pt-4 px-4">Date d'anniversaire: <strong>{new Date(birthday).toLocaleString("fr", { day: "numeric", month: "long", year: "numeric" })}</strong></p>}
                        {deathday && <p className="max-w-screen-xl pt-4 px-4">{!!deathday && <strong>`Décédé le ${deathday}`</strong>}</p>}
                        {place_of_birth && <p className="max-w-screen-xl pt-4 px-4">Lieu de naissance : <strong>{place_of_birth}</strong></p>}
                        {homepage && <p className="max-w-screen-xl pt-4 px-4">Site officiel:<strong> <a target="_blank" rel="noreferrer" href={homepage}>{homepage}</a></strong></p>}
                    </div>
                    {isExternaId && <div>
                        <h2 className="text-2xl pt-4 px-4 text-center">Réseaux sociaux</h2>
                        <div className="flex justify-center">
                            <SocialNetwork alt="logo de facebook" imgSrc="../assets/img/icons8-facebook-48.png" socialNetworkID={facebook_id} socialNetworkName="facebook" />
                            <SocialNetwork alt="logo de instagram" imgSrc="../assets/img/icons8-instagram-48.png" socialNetworkID={instagram_id} socialNetworkName="instagram" />
                            <SocialNetwork alt="logo de twitter" imgSrc="../assets/img/icons8-twitter-48.png" socialNetworkID={twitter_id} socialNetworkName="twitter" />
                            <SocialNetwork alt="logo de tiktok" imgSrc="../assets/img/icons8-tic-tac-48.png" socialNetworkID={tiktok_id} socialNetworkName="tik-tok" />
                            <SocialNetwork alt="logo de youtube" imgSrc="../assets/img/icons8-youtube-48.png" socialNetworkID={youtube_id} socialNetworkName="youtube" />
                        </div>
                    </div>}
                    <GridMovie movies={movies} isLoading={isLoading} page={page} setters={setters} isPaginate={false} />
                </div>
        }
        </>
    )
}