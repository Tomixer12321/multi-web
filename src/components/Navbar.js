import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Domu</Link>
        <br />
        <Link to="/movies">Filmy</Link>
        <br />
        <Link to="/serials">Serialy</Link>
      </nav>
    </header>
  );
};

export default Navbar;
