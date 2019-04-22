import {
    GET_USER_ITEMS_START,
    GET_USER_ITEMS_SUCCESS,
    GET_USER_ITEMS_FAILURE,

    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
} from '../actions';

const initialState = {
    newUser: null,
    fetchingUser: false,
    userItems: [],
    fetchingItems: false,
    error: null
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_START:
            return {
                ...state,
                fetchingUser: true
            }

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                newUser: action.payload
            }

        case REGISTER_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }

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