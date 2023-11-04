import {  NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div>
        <ul className="flex max-w-screen-xl mx-auto">
          <li className="flex-1 ml-4">
            <NavLink to={{pathname: "/"}} className={({isActive}) => isActive ? "w-full text-center block rounded py-2 px-4 bg-blue-500 text-white" : "w-full text-center block rounded py-2 px-4 text-blue-500"}>
              <span className="max-w-screen-xl md:text-2xl">
                Films du moment
              </span>
            </NavLink>
          </li>
          <li className="flex-1 ml-4">
            <NavLink to="/top_rated" className={({isActive}) => isActive ? "w-full text-center block rounded py-2 px-4 bg-blue-500 text-white" : "w-full text-center block rounded py-2 px-4 text-blue-500"}>
              <span className="max-w-screen-xl md:text-2xl">
                Films les mieux notés
              </span>
            </NavLink>
          </li>
          <li className="flex-1 ml-4">
            <NavLink to="/upcoming" className={({isActive}) => isActive ? "w-full text-center block rounded py-2 px-4 bg-blue-500 text-white" : "w-full text-center block rounded py-2 px-4 text-blue-500"}>
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
