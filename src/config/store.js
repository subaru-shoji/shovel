import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import reducers from '../app/reducers';


const createStoreWithMiddleware = applyMiddleware(...[thunk])(createStore);
const rootReducer = combineReducers(reducers);

export default store = (() => {
  if (process.env.NODE_ENV !== 'production') {
    return createStoreWithMiddleware(
      rootReducer, 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    // Only Production
    return createStoreWithMiddleware(
      rootReducer
    );
  }
})();
