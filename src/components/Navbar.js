import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeLink link" : "nonActiveLink link"
          }
        >
          Domu
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "activeLink link" : "nonActiveLink link"
          }
        >
          Filmy
        </NavLink>
        <NavLink
          to="/serials"
          className={({ isActive }) =>
            isActive ? "activeLink link" : "nonActiveLink link"
          }
        >
          Serialy
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
