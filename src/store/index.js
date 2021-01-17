import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import * as rootReducer from './reducers';

const store = createStore(combineReducers(rootReducer), compose(applyMiddleware(thunk)));

export default store;
