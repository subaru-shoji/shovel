import React from 'react';

import AppBar from 'material-ui/AppBar';

import SearchField from './SearchField'
import SearchButton from './SearchButton'
import SearchToolBar from './SearchToolBar'

import { SHOW_PER_SEARCH } from '../../../constants/constant';


export default function SearchForm({searchMethod, openMenu}) {
  return (
    <form onSubmit={searchMethod}>
      <AppBar
        title={(<SearchField/>)}
        onLeftIconButtonTouchTap={openMenu}
        iconElementRight={(<SearchButton searchMethod={searchMethod}/>)}
      />
      <input name="lim" type="hidden" value={SHOW_PER_SEARCH} />
      <div>
        <SearchToolBar/>
      </div>
    </form>
  );
};
