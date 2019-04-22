import axios from 'axios';
import { bindActionCreators } from 'redux';

//get items for marketplace
export const FETCH_MARKETPLACE_START = "FETCH_MARKETPLACE_START";
export const FETCH_MARKETPLACE_SUCCESS = "FETCH_MARKETPLACE_SUCCESS";
export const FETCH_MARKETPLACE_FAILURE = "FETCH_MARKETPLACE_FAILURE";

//register a user
export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

//get user items
export const GET_USER_ITEMS_START = "GET_USER_ITEMS_START";
export const GET_USER_ITEMS_SUCCESS = "GET_USER_ITEMS_SUCCESS";
export const GET_USER_ITEMS_FAILURE = "GET_USER_ITEMS_FAILURE";


export const getMarketplace = () => dispatch => {
    dispatch({ type: FETCH_MARKETPLACE_START });

    return axios
        .get('http://localhost:5001/items')
        .then(response => {
            dispatch({ type: FETCH_MARKETPLACE_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: FETCH_MARKETPLACE_FAILURE, payload: error });
        });
}

export const registerUser = newUser => dispatch => {
    dispatch({ type: REGISTER_USER_START });

    return axios
        .post('http://localhost:5001/users/register', newUser)
        .then(response => {
            console.log(response.data);
            dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: REGISTER_USER_FAILURE, payload: error });
        });
}

export const getUserItems = (userId=1) => dispatch => {
    dispatch({ type: GET_USER_ITEMS_START });

    return axios
        .get(`http://localhost:5001/items/${userId}`)
        .then(response => {
            dispatch({ type: GET_USER_ITEMS_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: GET_USER_ITEMS_FAILURE, payload: error });
        });
}