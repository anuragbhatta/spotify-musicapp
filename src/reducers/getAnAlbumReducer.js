import {
    GET_AN_ALBUM_START,
    GET_AN_ALBUM_SUCCESS,
    GET_AN_ALBUM_FAILURE,
    GET_AN_ALBUM_ERROR
} from '../utility/actionTypes';

const initialState = {
  gettingAnAlbum: false,
  gotAnAlbum: false,
  gettingAnAlbumError: null,
  gotAnAlbumData: []
}

export const getAnAlbumReducer = (state = initialState , action) => {
  //console.log(action);
  switch(action.type) {
    case GET_AN_ALBUM_START:
      return {
        ...state,
        gettingAnAlbum: true
      };
    case GET_AN_ALBUM_FAILURE:
      return {
        ...state,
        gettingAnAlbum: false,
        gettingAnAlbumError: action.payload
      };
    case GET_AN_ALBUM_ERROR:
      return {
        ...state,
        gettingAnAlbum: false,
        gettingAnAlbumError: action.payload
      };
    case GET_AN_ALBUM_SUCCESS:
    //   console.log("Inside getAnAlbumReducer : Success");
      console.log(action.payload);
      return {
        ...state,
        gettingAnAlbum: false,
        gotAnAlbum: true,
        gotAnAlbumData: action.payload
      };
    default:
      return state;
  }
}