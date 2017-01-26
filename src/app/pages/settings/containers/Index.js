import React from 'react';

import IndexView from '../components/views/Index';

import AppBar from '../../layouts/AppBar';
import Main from '../../layouts/Main';

const Index = () => {
  return (
    <Main header={<AppBar/>}>
      <IndexView/>
    </Main>
  );
};

export default Index;
