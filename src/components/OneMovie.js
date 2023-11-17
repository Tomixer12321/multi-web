import { useParams } from "react-router-dom"

const OneMovie = () => {

    console.log(useParams())

    const {movieID}=useParams()

  return <section>
    <h1>{movieID}</h1>
  </section>
}

export default OneMovie