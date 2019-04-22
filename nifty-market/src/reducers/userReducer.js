import {
    GET_USER_ITEMS_START,
    GET_USER_ITEMS_SUCCESS,
    GET_USER_ITEMS_FAILURE,
} from '../actions';

const initialState = {
    userItems: [],
    fetchingItems: false,
    error: null
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_USER_ITEMS_START:
            return {
                ...state,
                fetchingItems: true
            }

        case GET_USER_ITEMS_SUCCESS:
            return {
                ...state,
                userItems: action.payload
            }
        
        case GET_USER_ITEMS_FAILURE:
            return {
                ...state,
                userItems: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;