import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from 'redux-saga-store/sagas/index.js';
import authReducer from 'redux-saga-store/reducers/auth';
import createSagaMiddleware from 'redux-saga';

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
        <div>hi</div>
      </Provider>
    );
  } 
}