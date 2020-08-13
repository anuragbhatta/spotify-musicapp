import axios from 'axios';
import * as GLOBAL from '../utility/config';
import {
    GET_AUTH_TOKEN_START,
    GET_AUTH_TOKEN_SUCCESS,
    GET_AUTH_TOKEN_FAILURE,
    GET_AUTH_TOKEN_ERROR
} from '../utility/actionTypes';

export const getAuthTokenAction = (payload) => {
    console.log("Inside getAuthTokenAction...");

        let token = 'Basic ' + btoa(payload.clientID + ':' + payload.clientSecret);
        // axios.defaults.headers.common['Authorization'] =  token;
        // axios.defaults.headers.common['Content-Type'] =  'application/x-www-form-urlencoded';
        // axios.defaults.headers.common['Authorization'] =  token;
        // delete axios.defaults.headers.common['Authorization'];
      
    return dispatch => {
        dispatch({ type: GET_AUTH_TOKEN_START });

       return axios({
            url: `${GLOBAL.API_HOST}token`,
            method: "post",
            // params: {
            //     // grant_type: "client_credentials"
            //     grant_type :'authorization_code',
            // },
            // params: {
            //     client_id: payload.clientID,
            //     client_secret: payload.clientSecret,
            //     // code,
            //     // grant_type :'authorization_code',
            //     grant_type :'client_credentials',
            //     redirect_uri: 'http://localhost:3000/'
            // },
            data: "grant_type=client_credentials",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            auth: {
                username: payload.clientID,
                password: payload.clientSecret
                // username: 'anuragbhatta1989@hotmail.com',
                // password: 'anurag@123'
            }
        })
        .then(res => {
            // delete axios.defaults.headers.common['Authorization'];
            console.log(res);
            if (res.status === 200 || res.status === 201) {
                dispatch({ type:  GET_AUTH_TOKEN_SUCCESS, payload: res.data })
            } else {
                dispatch({ type: GET_AUTH_TOKEN_FAILURE, payload: res.data })
            }
        })
        .catch(err => {
            dispatch({ type: GET_AUTH_TOKEN_ERROR, payload: err })
        })



        // return axios.post(`${GLOBAL.API_HOST}token`, {grant_type: 'client_credentials'})
        //     .then(res => {
        //         delete axios.defaults.headers.common['Authorization'];
        //         console.log(res);
        //         if (res.data.status === 200 || res.data.status === 201) {
        //             dispatch({ type:  GET_AUTH_TOKEN_SUCCESS, payload: res.data.data })
        //         } else {
        //             dispatch({ type: GET_AUTH_TOKEN_FAILURE, payload: res.data.message })
        //         }
        //     })
        //     .catch(err => {
        //         dispatch({ type: GET_AUTH_TOKEN_ERROR, payload: err })
        //     })
    }
}


