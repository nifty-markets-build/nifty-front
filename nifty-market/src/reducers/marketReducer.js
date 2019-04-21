import {
    FETCH_MARKETPLACE_START,
    FETCH_MARKETPLACE_SUCCESS,
    FETCH_MARKETPLACE_FAILURE
} from '../actions';

const initialState = {
    items: [],
    fetchingItems: false,
    error: null
};

const marketplaceReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_MARKETPLACE_START:
            return {
                ...state,
                fetchingItems: true
            };
        
        case FETCH_MARKETPLACE_SUCCESS:
            return {
                ...state,
                items: action.payload
            };

        case FETCH_MARKETPLACE_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default marketplaceReducer;