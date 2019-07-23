import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { root } from '../reducers';

// Redux-Saga
import createSagaMiddleware from 'redux-saga';
import { RootState } from '../reducers/types';

export const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadedState?: RootState) =>
  createStore(root, preloadedState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
