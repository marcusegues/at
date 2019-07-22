import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { root } from '../reducers';

// Redux-Saga
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => createStore(root, composeWithDevTools(applyMiddleware(sagaMiddleware)));
