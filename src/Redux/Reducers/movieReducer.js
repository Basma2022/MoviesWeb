import { GETALLMOVIES, GETMOVIEDETAILS, SEARCHMOVIE } from "../Actions/types"

const initialState={
    movies:null,
    filteredMovies:null,
    currentMovie:null
}

const reducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case GETALLMOVIES:
            {
                return{...state,movies:action.payload,filteredMovies:action.payload}
            }
        case SEARCHMOVIE:
            {
                return{...state,filteredMovies:state.movies.filter((mov)=>mov.name.toLowerCase().includes(action.payload.toLowerCase()))}
            }
        case GETMOVIEDETAILS:
            {
                return{...state,currentMovie:action.payload}
            }
        default:
            return 0;
    }
}

export default reducer;
