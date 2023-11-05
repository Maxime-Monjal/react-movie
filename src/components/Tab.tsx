import React from "react"
import { NavLink } from "react-router-dom"

type TabProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>
    title: string 
    pathname: string
}

export const Tab = ({setPage, title, pathname}: TabProps)  => {
    return  (<li className="flex-1 ml-4">
    <NavLink onClick={() => setPage(1)} to={{pathname}} className={({isActive}) => isActive ? "w-full text-center block rounded py-2 px-4 bg-blue-500 text-white" : "w-full text-center block rounded py-2 px-4 text-blue-500"}>
      <span className="max-w-screen-xl md:text-2xl">
        {title}
      </span>
    </NavLink>
  </li>)
}