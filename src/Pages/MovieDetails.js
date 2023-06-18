import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../Redux/Actions/movieActions";
import Spinner from "../Components/Spinner";

const MovieDetails = () => {
  const id = useParams().id;

  const dispatch = useDispatch();

  useEffect(() => {
    getMovieDetails(dispatch, id);
  }, [dispatch, id]);

  const movie = useSelector((state) => state.currentMovie);

  if (!movie) return <Spinner></Spinner>;
  else
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body ">
            <img
              className="thumbnail"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster}
              alt="Poster"
            />
          </div>

          <div className="col-md-8">
            <h2 className="mb-4 mt-3">{movie.name} </h2>
            <ul className="list-group mt-5">
              <li className="list-group-item py-4">
                <strong>Type:</strong> {movie.type}
              </li>

              <li className="list-group-item py-4">
                <strong>Language:</strong> {movie.language}
              </li>

              <li className="list-group-item py-4">
                <strong>Rating:</strong> {movie.rate}
                <div
                  className="fa fa-star px-1"
                  style={{ color: "#f5de50" }}
                ></div>
              </li>

              <li className="list-group-item py-4">
                <strong>Release Date:</strong> {movie.date}
              </li>

              <li className="list-group-item py-4">
                <strong>Story:</strong> {movie.story}
              </li>
            </ul>

            <div className="text-center my-5">
              <Link to="/" className="btn btn-primary">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MovieDetails;
