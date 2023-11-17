import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" className={({isActive})=>isActive?"activeLink":"nonActiveLink"}>Domu</NavLink>
        <br />
        <NavLink to="/movies" className={({isActive})=>isActive?"activeLink":"nonActiveLink"}>Filmy</NavLink>
        <br />
        <NavLink to="/serials" className={({isActive})=>isActive?"activeLink":"nonActiveLink"}>Serialy</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
