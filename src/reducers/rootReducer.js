import { combineReducers } from "redux";
import { getAuthTokenReducer } from "./getAuthTokenReducer";
import { searchReducer } from "./searchReducer";
import { getAnAlbumReducer } from "./getAnAlbumReducer";

export default combineReducers({
    getAuthTokenReducer,
    searchReducer,
    getAnAlbumReducer,
});
