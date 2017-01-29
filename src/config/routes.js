import React from 'react';
import { Router, Route, IndexRedirect, Redirect, browserHistory } from 'react-router'

import App from '../app/pages/layouts/App';

import * as Novels from '../app/pages/novels/';
import * as Settings from '../app/pages/settings/'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/novels/search' />
        <Redirect from='/novels' to='/novels/search' />
        <Route path='/novels/search' component={Novels.Search}/>
        <Route path='/settings' component={Settings.Index}/>
      </Route>
    </Router>
  )
};

export default Routes;
