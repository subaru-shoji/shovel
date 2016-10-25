import React from 'react';

import NovelList from './NovelList';
import SearchBar from './SearchBar';

export default function App () {
  return (
    <div>
      <SearchBar/>
      <NovelList/>
    </div>
  );
};