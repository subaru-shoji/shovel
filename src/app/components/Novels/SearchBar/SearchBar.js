import React from 'react';

import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchToolBar from './SearchToolBar';

import CommonBar from '../../Common/CommonBar'

const SearchBar = ({searchMethod}) => {
  return (
    <form onSubmit={searchMethod}>
      <div>
        <CommonBar
          title={(<SearchField/>)}
          iconElementRight={(<SearchButton searchMethod={searchMethod}/>)}
        />
      </div>
      <div>
        <SearchToolBar/>
      </div>
    </form>
  );
}


export default SearchBar;
