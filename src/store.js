import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

import { reducer } from './reducers';

const reducerApp = compose(
    mergePersistedState()
)(reducer);

const storage = compose(
    filter('nested.key')
)(adapter(window.localStorage));

const enhancer = compose(
  /* applyMiddleware(...middlewares) */
  persistState(storage, 'my-storage-key')
);

const store = createStore(reducerApp, applyMiddleware(thunkMiddleware));

export default store;
