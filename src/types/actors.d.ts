declare type IActors = {
  adult: boolean
  cast_id: number
  character: string
  credit_id: string
  gender: number
  id: number
  known_for_department: string
  name: string
  order: number
  original_name: string
  popularity: number
  profile_path: string
}

declare type IFilmography = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[]
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  character: string,
  credit_id: string,
  order: number
}

declare type IExternalID = {
  id: number,
  freebase_mid: string,
  freebase_id: string,
  imdb_id: string,
  tvrage_id: number,
  wikidata_id: string,
  facebook_id: string,
  instagram_id: string,
  tiktok_id: string,
  twitter_id: string,
  youtube_id: string
}

declare type IActorDetail = {
  adult: boolean
  also_known_as: []
  biography: string
  birthday: string
  deathday: string
  gender: number
  homepage:  string
  id: number
  imdb_id:  string
  known_for_department:  string
  name: string
  place_of_birth:  string
  popularity:number
  profile_path:  string
}

declare type IActor = {
actorDetail: IActorDetail
externalID : IExternalID,
filmography: IFilmography[]
}
