import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './shared/store/sagas/index.js';
import authReducer from './shared/store/reducers/auth';
import immunizationReducer from './shared/store/reducers/immunization';
import createSagaMiddleware from 'redux-saga';
import LoginPage from './containers/LoginPage/LoginPage';

let composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: authReducer,
    immunization: immunizationReducer
})

const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
  } 
}