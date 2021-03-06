import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers,  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootSaga from 'redux-saga-store/sagas/index'
import authReducer from 'redux-saga-store/reducers/auth'
import immunizationReducer from 'redux-saga-store/reducers/immunization';

let composeEnhancers = compose
/*
if (process.env.NODE_ENV === 'development' && navigator.userAgent.indexOf("Chrome") != -1) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
    composeEnhancers = compose;
}*/


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
    immunization: immunizationReducer
})

const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

const app = (
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
