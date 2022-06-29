export const Header = () => {
  return (
    <div className="bg-black text-white">
      <div
        className="
            flex
            justify-around
            items-center
            max-w-screen-xl
            h-28
            py-5
            px-4
            mx-auto
          "
      >
        <a href="/">
          <img
            className="hidden sm:block"
            width="100"
            height="100"
            src="../assets/img/MDB.svg"
            alt="powered by the movie db"
          />
        </a>
        <a href="/">
          <span className="md:text-2xl">Welcome to React Movie</span>
        </a>
        <img
          width="122"
          height="100"
          src="../assets/img/MDB.png"
          alt="powered by the movie db"
        />
      </div>
    </div>
  );
};
