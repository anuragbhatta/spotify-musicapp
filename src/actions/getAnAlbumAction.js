import axios from 'axios';
import * as GLOBAL from '../utility/config';
import {
    GET_AN_ALBUM_START,
    GET_AN_ALBUM_SUCCESS,
    GET_AN_ALBUM_FAILURE,
    GET_AN_ALBUM_ERROR
} from '../utility/actionTypes';

export const getAnAlbumAction = (payload) => {
    console.log("Inside getAnAlbumAction...");
      
    return dispatch => {
        dispatch({ type: GET_AN_ALBUM_START });

        return axios.get(`${GLOBAL.API_HOST}albums/${payload.albumID}`)
            .then(res => {
                console.log(res);
                if (res.status === 200 || res.status === 201) {
                    dispatch({ type:  GET_AN_ALBUM_SUCCESS, payload: res.data })
                } else {
                    dispatch({ type: GET_AN_ALBUM_FAILURE, payload: res.data })
                }
            })
            .catch(err => {
                dispatch({ type: GET_AN_ALBUM_ERROR, payload: err })
            })        
    }
}


