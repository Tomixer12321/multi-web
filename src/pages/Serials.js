import { Link } from "react-router-dom"

const Serials = () => {
  return <section>
    <ul>
        <li><Link to="/">Domovska stranka</Link></li>
        <li><Link to="/movies">filmy</Link></li>
        <li>serialy</li>
    </ul>
  </section>
}

export default Serials