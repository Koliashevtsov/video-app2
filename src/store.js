import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLocalStorage from 'redux-local-storage';

import reducer from './reducers';

// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const localStorageMiddleware = createLocalStorage();

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    localStorageMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;
