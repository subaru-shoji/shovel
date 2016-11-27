import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './styles/index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './styles/theme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './containers/App';
import reducers from './reducers/';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const rootReducer = combineReducers(reducers);

const store = (() => {
  if (process.env.NODE_ENV !== 'production') {
    return createStoreWithMiddleware(
      rootReducer, 
      window.devToolsExtension && window.devToolsExtension()
    );
  } else {
    // Only Production
    return createStoreWithMiddleware(
      rootReducer
    );
  }
})();


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
