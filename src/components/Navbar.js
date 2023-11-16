import { Link } from "react-router-dom"

const Navbar = () => {
  return <nav>
    <Link to="/">Domu</Link><br />
    <Link to="/movies">Filmy</Link><br />
    <Link to="/serials">Serialy</Link>
  </nav>
}

export default Navbar