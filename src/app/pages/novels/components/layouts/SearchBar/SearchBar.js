import React from 'react';

import serialize from 'form-serialize';

import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchToolBar from './SearchToolBar';

import AppBar from '../../../../layouts/AppBar'

const SearchBar = ({onSearch, query}) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const form = (event.currentTarget.form || event.currentTarget);
    const query = serialize(form, {
      hash: true
    });
    onSearch(query)
  }

  return (
    <form onSubmit={handleSearch}>
      <div>
        <AppBar
    title={(<SearchField query={query}/>)}
    iconElementRight={(<SearchButton searchMethod={handleSearch}/>)}
    />
      </div>
      <div>
        <SearchToolBar query={query}/>
      </div>
    </form>
    );
}


export default SearchBar;
