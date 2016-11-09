import React from 'react';

import AppBar from 'material-ui/AppBar';

import SearchField from './SearchField'
import SearchButton from './SearchButton'
import SelectOrder from './SelectOrder'
import SelectGenre from './SelectGenre'

import { SHOW_PER_SEARCH } from '../../constants/constant';

import { commonPadding } from '../../styles/style.js';


export default function SearchForm({searchMethod}) {
  return (
    <form onSubmit={searchMethod}>
      <AppBar
        title={(<SearchField/>)}
        iconElementRight={(<SearchButton searchMethod={searchMethod}/>)}
      />
      <input name="lim" type="hidden" value={SHOW_PER_SEARCH} />
      <div style={commonPadding}>
        <SelectOrder/>
      </div>
      <div style={commonPadding}>
        <SelectGenre/>
      </div>
    </form>
  );
};
