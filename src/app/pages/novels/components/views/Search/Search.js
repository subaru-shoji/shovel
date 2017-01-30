import React from 'react';

import Main from '../../../../layouts/Main';
import SearchBar from '../../layouts/SearchBar';
import NovelList from '../../layouts/NovelList';


const Search = ({location, onSearch}) => {
  const header = (<SearchBar onSearch={onSearch}/>);
  const main = (
  <NovelList
  query={location.query}
  />
  );

  return (
    <Main header={header}>
        {main}
    </Main>
    );
}

export default Search;
