import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Domu</NavLink>
        <br />
        <NavLink to="/movies">Filmy</NavLink>
        <br />
        <NavLink to="/serials">Serialy</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
