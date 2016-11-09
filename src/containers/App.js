import React from 'react';

import NovelList from './NovelList';
import SearchBar from './SearchBar';
import { flexContainer } from '../styles/style'

export default function App () {
  const content = {
    maxWidth: 750
  };

  const side = {
    flex: 1
  };

  return (
    <div>
      <header>
        <SearchBar/>
      </header>
      <div style={flexContainer}>
        <div style={side}></div>
        <div style={content}>
          <NovelList/>
        </div>
        <div style={side}></div>
      </div>
    </div>
  );
};
