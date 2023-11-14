import { Link } from "react-router-dom"

const Movies = () => {
  return <section>
    <ul>
        <li><Link to="/">Domovska stranka</Link></li>
        <li>filmy</li>
        <li><Link to="/serials">serialy</Link></li>
    </ul>
  </section>
}

export default Movies