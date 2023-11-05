import React from "react"
import { Tab } from "./Tab"

export const NavBar = ({setPage}: { setPage: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
      <div>
        <ul className="flex max-w-screen-xl mx-auto">
         <Tab pathname="/" setPage={setPage} title="Films du moment" />
         <Tab pathname="/top_rated" setPage={setPage} title="Films les mieux notés" />
         <Tab pathname="/upcoming" setPage={setPage} title="Films à venir" />
        </ul>
      </div>
  )
}
