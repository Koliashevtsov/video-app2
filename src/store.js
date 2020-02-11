import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import persistState from 'redux-localstorage';
import { reducer } from './reducers';

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  persistState()
);

const store = createStore(reducer, enhancer);

export default store;
