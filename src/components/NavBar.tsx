import React from "react";
import {  NavLink } from "react-router-dom";

export const NavBar = ({setPage}: { setPage: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <>
      <div>
        <ul className="flex max-w-screen-xl mx-auto">
          <li className="flex-1 ml-4">
            <NavLink onClick={() => setPage(1)} to={{pathname: "/"}} className={({isActive}) => isActive ? "w-full text-center block rounded py-2 px-4 bg-blue-500 text-white" : "w-full text-center block rounded py-2 px-4 text-blue-500"}>
              <span className="max-w-screen-xl md:text-2xl">
                Films du moment
              </span>
            </NavLink>
          </li>
          <li className="flex-1 ml-4">
            <NavLink onClick={() => setPage(1)} to="/top_rated" className={({isActive}) => isActive ? "w-full text-center block rounded py-2 px-4 bg-blue-500 text-white" : "w-full text-center block rounded py-2 px-4 text-blue-500"}>
              <span className="max-w-screen-xl md:text-2xl">
                Films les mieux notés
              </span>
            </NavLink>
          </li>
          <li className="flex-1 ml-4">
            <NavLink onClick={() => setPage(1)} to="/upcoming" className={({isActive}) => isActive ? "w-full text-center block rounded py-2 px-4 bg-blue-500 text-white" : "w-full text-center block rounded py-2 px-4 text-blue-500"}>
              <span className="max-w-screen-xl md:text-2xl">
                Films à venir
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
