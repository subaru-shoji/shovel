import React from 'react';

import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchToolBar from './SearchToolBar';

import AppBar from '../../../../layouts/AppBar'

const SearchBar = ({onSearch}) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const form = (event.currentTarget.form || event.currentTarget);
    const query = serialize(form, { hash: true });
    onSearch(query)
  }

  return (
    <form onSubmit={handleSearch}>
      <div>
        <AppBar
          title={(<SearchField/>)}
          iconElementRight={(<SearchButton searchMethod={handleSearch}/>)}
        />
      </div>
      <div>
        <SearchToolBar/>
      </div>
    </form>
  );
}


export default SearchBar;
