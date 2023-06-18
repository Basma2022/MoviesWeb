import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllMovies } from "../Redux/Actions/movieActions";
import MovieCard from "./MovieCard";
import Spinner from "./Spinner";

const Movies = () => {
  const movies = useSelector((state) => state.filteredMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAllMovies(dispatch);
  }, [dispatch]);

  if (!movies) return <Spinner></Spinner>;
  else
    return (
      <div className="row m-5">
        {movies.map((mov) => (
          <MovieCard key={mov.id} movie={mov}></MovieCard>
        ))}
      </div>
    );
};

export default Movies;
