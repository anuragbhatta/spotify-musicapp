import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    SEARCH_ERROR
} from '../utility/actionTypes';

const initialState = {
  searching: false,
  searched: false,
  searchingError: null,
  searchedData: []
}

export const searchReducer = (state = initialState , action) => {
  //console.log(action);
  switch(action.type) {
    case SEARCH_START:
      return {
        ...state,
        searching: true
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        searching: false,
        searchingError: action.payload
      };
    case SEARCH_ERROR:
      return {
        ...state,
        searching: false,
        searchingError: action.payload
      };
    case SEARCH_SUCCESS:
    //   console.log("Inside searchReducer : Success");
      console.log(action.payload);
      return {
        ...state,
        searching: false,
        searched: true,
        searchedData: action.payload
      };
    default:
      return state;
  }
}