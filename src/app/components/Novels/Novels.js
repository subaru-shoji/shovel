import React from 'react';

import MainLayout from '../Common/MainLayout';

import SearchBar from './SearchBar';
import NovelList from './NovelList';

class Novels extends React.Component {
  render () {
    return (
      <MainLayout header={<SearchBar/>}>
        <NovelList/>
      </MainLayout>
    );
  }
};

export default Novels;
