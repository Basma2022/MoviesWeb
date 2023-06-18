import axios from "axios";
import { GETALLMOVIES, GETMOVIEDETAILS, SEARCHMOVIE } from "./types";
import { APIURL } from "../../Constants/constants";

export const fetchAllMovies = (dispatch) => {
  axios
    .get(APIURL)
    .then((result) => dispatch({ type: GETALLMOVIES, payload: result.data }))
    .catch((err) => console.log(err));
};

export const searchMovie = (dispatch, text) => {
  dispatch({ type: SEARCHMOVIE, payload: text });
};

export const getMovieDetails = (dispatch, id) => {
  axios
    .get(APIURL + "/" + id)
    .then((res) => dispatch({ type: GETMOVIEDETAILS, payload: res.data }))
    .catch((err) => console.log(err));
};
