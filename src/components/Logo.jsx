import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/home">
      <h1 className="w-full text-2xl font-bold tracking-wide  ">
        TREND <span className="font-light">MALL</span>
      </h1>
    </NavLink>
  );
}

export default Logo;
