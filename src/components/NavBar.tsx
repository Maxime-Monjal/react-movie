import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div>
        <ul className="flex max-w-screen-xl mx-auto">
          <li className="flex-1 mr-2 ml-4">
            <Link
              to="/"
              className="w-full text-center block rounded py-2 px-4 text-blue-500"
            >
              <span className="max-w-screen-xl md:text-4xl pt-8 sm:pl-4">
                Films du moment
              </span>
            </Link>
          </li>
          <li className="flex-1 mr-2">
            <Link
              to="/top_rated"
              className="w-full text-center block rounded py-2 px-4 text-blue-500"
            >
              <span className="max-w-screen-xl md:text-4xl pt-8 sm:pl-4">
                Films les mieux notés
              </span>
            </Link>
          </li>
          <li className="flex-1 mr-2">
            <Link
              to="/upcoming"
              className="w-full text-center block rounded py-2 px-4 text-blue-500"
            >
              <span className="max-w-screen-xl md:text-4xl pt-8 sm:pl-4">
                Films à venir
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
