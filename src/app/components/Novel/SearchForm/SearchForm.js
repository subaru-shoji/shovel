import React from 'react';

import SearchField from './SearchField';
import SearchButton from './SearchButton';
import SearchToolBar from './SearchToolBar';

import CommonBar from '../../Common/CommonBar'

import {SHOW_PER_SEARCH} from '../../../../constants';

export default SearchForm = ({searchMethod}) => {
  return (
    <form onSubmit={searchMethod}>
      <CommonBar
        title={(<SearchField/>)}
        iconElementRight={(<SearchButton searchMethod={searchMethod}/>)}/>
      <input name="lim" type="hidden" value={SHOW_PER_SEARCH}/>
      <div>
        <SearchToolBar/>
      </div>
    </form>
  );
};
