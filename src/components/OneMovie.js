import { Link, useParams } from "react-router-dom";
import movies from "../data";
import "./OneMovie.css"

const OneMovie = () => {
  const { movieID } = useParams();
  const oneSpecificMovie = movies.find((oneMovie) => {
    return oneMovie.id === parseInt(movieID);
  });

  const { image, title, description, tags } = oneSpecificMovie;

  return (
    <section className="one-movie-more">
      <h2>{title}</h2>
      <img src={image} alt="" />
      <p>{description}</p>
      <p>{tags}</p>
      <Link to={"/movies"}>spet na vsechny filmy</Link>
    </section>
  );
};

export default OneMovie;
