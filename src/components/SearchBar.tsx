import React from 'react'
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query'

type ISearchBarProps = {
  setSearchText: (text: string) => void
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<IMovies[], unknown>>
  isSearchBarIsVisible?: boolean
}

export const SearchBar = ({ setSearchText, refetch, isSearchBarIsVisible }: ISearchBarProps) => {

  let timeoutId: ReturnType<typeof setTimeout>

  const handleSearch = (event: { target: { value: string } }) => {
    const text = event.target.value
    setSearchText(text)

    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      refetch()
    }, 1000)
  }

  return (
    <div className="flex justify-center items-center pb-8" style={ isSearchBarIsVisible ? {visibility: "visible"} : { visibility: "hidden"}}>

<div className="w-60">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Recherche</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={handleSearch} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg" placeholder="Rechercher un film..." required/>
    </div>
</div>

    </div>
  )
}

