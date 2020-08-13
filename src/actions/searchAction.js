import axios from 'axios';
import * as GLOBAL from '../utility/config';
import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    SEARCH_ERROR
} from '../utility/actionTypes';

export const searchAction = (payload) => {
    console.log("Inside searchAction...");
      
    return dispatch => {
        dispatch({ type: SEARCH_START });

        return axios.get(`${GLOBAL.API_HOST}search?q=${payload.query}&type=track%2Calbum%2Cartist`)
            .then(res => {
                console.log(res);
                if (res.status === 200 || res.status === 201) {
                    dispatch({ type:  SEARCH_SUCCESS, payload: res.data })
                } else {
                    dispatch({ type: SEARCH_FAILURE, payload: res.data })
                }
            })
            .catch(err => {
                dispatch({ type: SEARCH_ERROR, payload: err })
            })        
    }
}


