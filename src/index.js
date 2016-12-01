import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Routes, store } from './config'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './app/styles/theme';

import './app/styles/index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
