import React from 'react';

import Main from '../../../../layouts/Main';
import SearchBar from '../../layouts/SearchBar';
import NovelList from '../../layouts/NovelList';


const Search = ({onSearch}) => {
  const header = (<SearchBar onSearch={onSearch}/>);
  const main = (
    <NovelList
      query={this.props.location.query}
    />
  );

  return (
    <Main header={header}>
        {main}
    </Main>
  );
}

export default Search;
