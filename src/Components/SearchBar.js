import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovie } from "../Redux/Actions/movieActions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [currentText, setCurrentText] = useState("");

  const Search = (e) => {
    e.preventDefault();
    searchMovie(dispatch, currentText);
  };

  const onTextChange = (e) => {
    setCurrentText(e.target.value);
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Search for a Movie
        </h1>
        <form id="searchForm" onSubmit={Search}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search Movies..."
            onChange={onTextChange}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
