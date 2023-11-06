import React from "react"
import { Tab } from "./Tab"

type INavBar = {
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const NavBar = ({setPage}: INavBar) => {
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
