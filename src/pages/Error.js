import { Link } from "react-router-dom"

const Error = () => {
  return <div>
    <h2>404</h2>
    <p>Stranka nenalezena</p>
    <p><Link to="/">uvodni strana</Link></p>
  </div>
}

export default Error