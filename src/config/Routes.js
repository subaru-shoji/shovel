import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import App from '../app/components/App';

import NovelRoutes from '../app/pages/novels/routes';
import SettingRoutes from '../app/pages/settings/routes'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/novels' />
        <NovelRoutes/>
        <SettingRoutes/>
      </Route>
    </Router>
  )
};

export default Routes;
