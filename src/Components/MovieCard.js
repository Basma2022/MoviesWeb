import { Link } from "react-router-dom";
import { IMAGEURL } from "../Constants/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        <Link to={"/movie/" + movie.id}>
          <img
            className="w-100 mb-2"
            src={IMAGEURL + movie.poster}
            alt="Movie Cover"
          />
        </Link>
        <h5 className="text-light card-title mb-4">{movie.name}</h5>

        <div className="position-absolute fixed-bottom">
          <h5 className="card-title" style={{ color: "#f5de50" }}>
            {movie.type}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
