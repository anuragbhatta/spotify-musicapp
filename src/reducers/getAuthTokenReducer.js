import {
    GET_AUTH_TOKEN_START,
    GET_AUTH_TOKEN_SUCCESS,
    GET_AUTH_TOKEN_FAILURE,
    GET_AUTH_TOKEN_ERROR
} from '../utility/actionTypes';

const initialState = {
  gettingAuthToken: false,
  gotAuthToken: false,
  gettingAuthTokenError: null,
  gotAuthTokenData: []
}

export const getAuthTokenReducer = (state = initialState , action) => {
  //console.log(action);
  switch(action.type) {
    case GET_AUTH_TOKEN_START:
      return {
        ...state,
        gettingAuthToken: true
      };
    case GET_AUTH_TOKEN_FAILURE:
      return {
        ...state,
        gettingAuthToken: false,
        gettingAuthTokenError: action.payload
      };
    case GET_AUTH_TOKEN_ERROR:
      return {
        ...state,
        gettingAuthToken: false,
        gettingAuthTokenError: action.payload
      };
    case GET_AUTH_TOKEN_SUCCESS:
    //   console.log("Inside getAuthTokenReducer : Success");
      console.log(action.payload);
      return {
        ...state,
        gettingAuthToken: false,
        gotAuthToken: true,
        gotAuthTokenData: action.payload
      };
    default:
      return state;
  }
}