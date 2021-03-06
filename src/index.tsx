import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store/configureStore';
import { sagaMiddleware } from './store/configureStore';

const store = configureStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
