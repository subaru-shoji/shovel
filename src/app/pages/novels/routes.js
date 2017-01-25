import React from 'react';
import { Route } from 'react-router'

import Search from './containers/Search';

const Routes = () => {
  return (
    <Route path='/novels/search' component={Search}/>
  )
}

export default Routes;
