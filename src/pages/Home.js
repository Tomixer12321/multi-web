import { Link,Outlet } from "react-router-dom"

const Home = () => {
  return <section>
    <ul>
        <li>Domovska stranka</li>
        <Outlet />
    </ul>
  </section>
}

export default Home