import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import marketplaceReducer from './reducers/marketReducer.js';
import userReducer from './reducers/userReducer.js';

const reducers = combineReducers({
    marketplace: marketplaceReducer,
    user: userReducer
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);