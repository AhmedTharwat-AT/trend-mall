import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink className="max-nav:w-full" to="/home">
      <h1 className="w-full whitespace-nowrap text-xl font-bold tracking-wide sm:text-2xl  ">
        TREND <span className="font-light">MALL</span>
      </h1>
    </NavLink>
  );
}

export default Logo;
