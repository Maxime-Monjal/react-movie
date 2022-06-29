export const NavBar = () => {
  return (
    <>
      <div>
        <ul className="flex max-w-screen-xl mx-auto">
          <li className="flex-1 mr-2 ml-4">
            <a
              href="/"
              className="w-full text-center block rounded py-2 px-4 text-blue-500"
            >
              <span className="max-w-screen-xl md:text-4xl pt-8 sm:pl-4">
                Films du moment
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
