import React from 'react';
import { Router } from 'react-router'

import Settings from './containers/Settings';

const Routes = () => {
  return (
    <Route path='/settings' component={Settings}/>
  )
}

export default Routes;
