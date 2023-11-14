import { Link } from "react-router-dom"

const Home = () => {
  return <section>
    <ul>
        <li>Domovska stranka</li>
        <li><Link to="/movies">filmy</Link></li>
        <li><Link to="/serials">serialy</Link></li>
    </ul>
  </section>
}

export default Home