import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './stylesheets/index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './components/App';
import reducer from './reducers/reducer';

const devToolsExtension = window.devToolsExtension && window.devToolsExtension();

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer, devToolsExtension);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
