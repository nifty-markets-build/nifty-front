import axios from 'axios';

//get items for marketplace
export const FETCH_MARKETPLACE_START = "FETCH_MARKETPLACE_START";
export const FETCH_MARKETPLACE_SUCCESS = "FETCH_MARKETPLACE_SUCCESS";
export const FETCH_MARKETPLACE_FAILURE = "FETCH_MARKETPLACE_FAILURE";

//get user items
export const GET_USER_ITEMS_START = "GET_USER_ITEMS_START";
export const GET_USER_ITEMS_SUCCESS = "GET_USER_ITEMS_SUCCESS";
export const GET_USER_ITEMS_FAILURE = "GET_USER_ITEMS_FAILURE";


export const getMarketplace = () => dispatch => {
    dispatch({ type: FETCH_MARKETPLACE_START });

    return axios
        .get('http://localhost:5000/items')
        .then(response => {
            dispatch({ type: FETCH_MARKETPLACE_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: FETCH_MARKETPLACE_FAILURE, payload: error });
        });
}

export const getUserItems = (userId=1) => dispatch => {
    dispatch({ type: GET_USER_ITEMS_START });

    return axios
        .get(`http://localhost:5000/items/${userId}`)
        .then(response => {
            dispatch({ type: GET_USER_ITEMS_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: GET_USER_ITEMS_FAILURE, payload: error });
        });
}