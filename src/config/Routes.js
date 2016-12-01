import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import App from '../app/components/App';
import Novels from '../app/components/Novels';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/novels' />
        <Route path='/novels' component={Novels}/>
      </Route>
    </Router>
  )
}

export default Routes;